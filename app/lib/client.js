import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql', // Asegúrate de que esta URL sea correcta
  cache: new InMemoryCache({ addTypename: false }), // Usa esta configuración si quieres mantener el caché mínimo
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache', // Siempre obtener los datos sin caché
    },
    query: {
      fetchPolicy: 'no-cache', // Siempre obtener los datos sin caché
    },
  },
});

export default client;
