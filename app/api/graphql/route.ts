import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "apollo-server-core";
import data from "../../db";

// Definir el esquema de GraphQL
const typeDefs = gql`
  type Specifications {
    brand: String
    itemWeight: String
    itemModelNumber: String
    dimensions: String
    colour: String
  }

  type Content {
    title: String
    vatios: String
    imageUrl: String
    precie: String
    description: String
    specifications: Specifications
  }

  type Query {
    contents: [Content]
  }
`;

// Definir los resolvers de GraphQL
const resolvers = {
  Query: {
    contents: () => data,
  },
};

// Crear el servidor Apollo
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// Exportar el manejador de Next.js usando Apollo
export const GET = startServerAndCreateNextHandler(apolloServer);
export const POST = startServerAndCreateNextHandler(apolloServer);
