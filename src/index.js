import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { resolvers } from './resolvers/resolver';
import { typeDefs } from './typeDefs'
import mongoose from 'mongoose';



const startServer = async () => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });

    server.applyMiddleware({ app });

    await mongoose.connect('mongodb+srv://safi:Safinceto981@cluster0.mitxr.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}
startServer();