import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import { connect } from './db';

const app = express();

connect();

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
}));

app.listen(3000, () => console.log('Server running on port 3000'));