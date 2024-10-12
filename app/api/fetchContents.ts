// app/lib/fetchContents.ts
import { gql } from "@apollo/client";
import client from "../lib/client";

export async function fetchContents() {
  const { data } = await client.query({
    query: gql`
      query {
        contents {
          text
          imageUrl
        }
      }
    `,
  });
  return data;
}