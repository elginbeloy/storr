import {ApolloServer} from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import {resolvers, typeDefs} from './graphqlconfig';

// Connect to MongoDB using Mongoose
const mongoUser = 'fibeats';
const mongoPass = 'HB8efzt7JiowdBeq';
const mongoCluster = 'cluster0-cnqsr.mongodb.net';
const mongoURI = `mongodb+srv://${mongoUser}:${mongoPass}@${mongoCluster}/test?retryWrites=true&w=majority`;

console.log(`[DB]: Connecting to MongoDB with Mongoose at ${mongoURI}`);
mongoose
  .connect(mongoURI, {useNewUrlParser: true})
  .then(() => {
    console.log('[DB]: MongoDB connection established.');
  })
  .catch((err: Error) => {
    console.log(`[DB]: Mongoose connection error: ${err}`);
  });

// Create Express server and enable CORS
const app = express();
app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const server = new ApolloServer({typeDefs, resolvers});
server.applyMiddleware({app});

// Listen
const port = 3000;

app.listen(port, () => {
  console.log(
    `[Express]: Server ready at http://localhost:${port}${server.graphqlPath}`,
  );
});
