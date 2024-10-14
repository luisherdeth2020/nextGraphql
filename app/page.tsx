"use client";

import { gql } from "@apollo/client";
import client from "./lib/client";
import { useState, useEffect } from "react";
import { Header } from "./ui/components/Header";
import { ContentCard } from "./ui/components/ContentCard";
import { Description } from "./ui/components/Description";
import { Specifications } from "./ui/components/Specifications";
import { Footer } from "./ui/components/Footer";
import { ContentData } from "./lib/definitions";

const GET_CONTENT = gql`
  query GetContent {
    contents {
      title
      vatios
      imageUrl
      precie
      description
      specifications {
        brand
        itemWeight
        itemModelNumber
        dimensions
        colour
      }
    }
  }
`;

export default function Page() {
  const [data, setData] = useState<ContentData | null>(null);

  useEffect(() => {
    const fetchContents = async () => {
      const { data } = await client.query({ query: GET_CONTENT });
      setData(data);
    };

    fetchContents(); 
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <main>
      {data.contents.map((content, index) => (
        <div key={index} className="container bg-[#10002f] text-white">
          <Header />
          <ContentCard content={content} />
          <Description description={content.description} />
          <Specifications specifications={content.specifications} />
          <Footer />
        </div>
      ))}
    </main>
  );
}