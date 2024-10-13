import { gql } from "@apollo/client";
import client from "./lib/client"; // Ruta relativa ajustada para App Router
import Image from "next/image";
import logo from "../public/images/logo.png";
import basket from "../public/images/basket.svg";
import { lusitana, montserrat } from "./ui/fonts/fonts";

const GET_CONTENT = gql`
  query GetContent {
    contents {
      text
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

async function fetchContents() {
  const { data } = await client.query({
    query: GET_CONTENT,
  });
  return data;
}

export default async function Page() {
  const data = await fetchContents();
  // console.log("data--", data);

  return (
    <div className="container mx-auto p-4">
      <main>
        <div className="container__card bg-[#10002f] flex flex-col ">
          <Image
            src={logo}
            alt="Octopus Energy"
            style={{ objectFit: "contain" }}
            width={180}
            height={56}
          />
          <Image
            src={basket}
            alt="Basket"
            style={{ objectFit: "contain" }}
            width={24}
            height={24}
          />
          {data.contents.map((content, index) => (
            <div key={index} className="items-center flex flex-col">
              <img
              className="bg-white"
                src={content.imageUrl}
                alt={`Imagen ${index + 1}`}
                style={{ width: "300px", height: "auto" }}
              />
              <h2 className={`${lusitana.className} text-5xl text-white`}>
                {content.text}
              </h2>
              <p className="text-[#ab9fcd]">{content.vatios}</p>
              <div className="containt__price">
                <span className="price__text">{content.precie}</span>
                <div className="containt__qty">
                  <p>Qty</p>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
