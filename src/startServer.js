import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose'

function startServer({ typeDefs, resolvers }) {
  mongoose.connect('mongodb+srv://admin:admin@cluster0.tlttkdp.mongodb.net/?retryWrites=true&w=majority')
	const server = new ApolloServer({ typeDefs, resolvers })
	server.listen().then(({ url }) => console.log(`Server started at: ${url}`));
}

export default startServer;