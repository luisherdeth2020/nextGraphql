import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql', // Asegúrate de que esta URL sea correcta
  cache: new InMemoryCache(),
});

export default client;