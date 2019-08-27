import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type Query {
    hello: String
    greeting(name: String): String
    tasks: [Task]
    getUsers: [User]
  }

  type Mutation {
    createTask(task: TaskInput): Task
    createUser(user: UserInput): User    
    deleteUser(userId: ID): User
    updateUser(userId: ID, user: UserInput): User
  }

  type Task {
    _id: ID
    title: String!
    description: String!
    number: Int
  }

  input TaskInput {
    title: String!
    description: String!
    number: Int
  }

  type User {
    _id: ID
    firstname: String!
    lastname: String!
    age: Int
  }

  input UserInput {
    firstname: String!
    lastname: String!
    age: Int
  }


`;

export  default makeExecutableSchema({
  typeDefs,
  resolvers,
});



