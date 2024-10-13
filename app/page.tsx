import { gql } from "@apollo/client";
import client from "./lib/client"; // Ruta relativa ajustada para App Router
import Image from "next/image";
import logo from "../public/images/logo.webp";
import basket from "../public/images/basket.svg";
import { lusitana, montserrat } from "./ui/fonts/fonts";

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
    <main>
      {data.contents.map((content, index) => (
        <div key={index} className="container  bg-[#10002f] text-white ">
          <div className="container__cardmx-auto p-4 flex flex-col mb-4">
            <header className="flex justify-between mb-8">
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
            </header>
            <Image
              className="bg-white rounded-2xl mb-10"
              src={content.imageUrl}
              alt={`Imagen ${index + 1}`}
              height={380}
              width={0}
              layout="responsive"
            />
            <h2 className={`${lusitana.className} text-4xl mb-2`}>
              {content.title}
            </h2>
            <p className="text-[#ab9fcd] justify-items-start font-medium mb-4">
              {content.vatios}
            </p>
            <div className="flex flex-row justify-between">
              <span className="text-2xl font-semibold">{content.precie}</span>
              <div className="containt__qty">
                <p className="text-center mb-1 text-sm">Qty</p>
                <button className="p-xl bg-[#5f0e6b] w-6 rounded-md">-</button>
                <span className="px-2 font-semibold">1</span>
                <button className="p-xl bg-[#f151f1] w-6 rounded-md">+</button>
              </div>
            </div>
          </div>
          <div className="description bg-[#170048] mb-4 p-4">
            <h2 className={`${lusitana.className} text-2xl mb-2`}>
              Description
            </h2>
            <p className="font-medium mb-2">{content.description}</p>
          </div>
          <div className="specifications mb-10 p-4">
            <h3
              className={`${montserrat.className} text-2xl font-semibold mb-2`}
            >
              Specifications
            </h3>
            <ul className="font-medium">
              <li>
                <span className="">Brand:</span> {content.specifications.brand}
              </li>
              <li className="py-3">
                <span className="">Item Weight:</span>{" "}
                {content.specifications.itemWeight}
              </li>
              <li>
                <span className="">Item Model Number:</span>{" "}
                {content.specifications.itemModelNumber}
              </li>
              <li className="py-3">
                <span className="">Dimensions:</span>{" "}
                {content.specifications.dimensions}
              </li>
              <li>
                <span className="">Colour:</span>{" "}
                {content.specifications.colour}
              </li>
            </ul>
          </div>
          <div className="footer p-4 text-[#a694d2] bg-[#170048] text-sm">
            <p>
              Octopus Energy Ltd is a company registered in England and Wales.
              Registered number: 09263424. Registered office: 33 Holborn,
              London, ECIN 2HT. Trading office: 20-24 Broadwick Street, London,
              WIF 8HT
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}
