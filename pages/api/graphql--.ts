import { ApolloServer, gql } from "apollo-server-micro";
import data from "../../app/db";

// Definir el esquema de GraphQL
const typeDefs = gql`
  type Content {
    text: String
    imageUrl: String
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
const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

// Desactivar bodyParser ya que Apollo lo gestiona
export const config = {
  api: {
    bodyParser: false,
  },
};