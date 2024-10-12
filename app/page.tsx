import { gql } from "@apollo/client";
import client from "./lib/client";

// Consulta GraphQL
const GET_CONTENT = gql`
  query GetContent {
    contents {
      text
      imageUrl
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
  console.log('data--', data)

  return (
    <div className="dark:bg-github-dark w-full min-h-screen flex justify-center relative bg-gradient-to-br from-[#343337] to-[#0a0a0c]">
      <main>
        <h1>Contenido</h1>
        {data.contents.map((content, index) => (
          <div key={index}>
            <h2>{content.text}</h2>
            {/* <img
              src={content.imageUrl}
              alt={`Imagen ${index + 1}`}
              style={{ width: "300px", height: "auto" }}
            /> */}
          </div>
        ))}
      </main>
    </div>
  );
}