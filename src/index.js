import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import { connectDB } from './config/db.js';
import alumnoRoutes from './rest/alumno.routes.js';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());

async function main() {
  await connectDB();

  // 1. Endpoint REST
  app.use('/api/alumnos', alumnoRoutes);

  // 2. Servidor GraphQL
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  app.use('/graphql', expressMiddleware(server));

  // 3. Levantar HTTP
  const PORT = process.env.PORT || 4000;
  httpServer.listen(PORT, () => {
    console.log(`🚀 REST listo en:    http://localhost:${PORT}/api/alumnos`);
    console.log(`🚀 GraphQL listo en: http://localhost:${PORT}/graphql`);
  });
}

main();