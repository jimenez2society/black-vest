const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    email: String!
    password: String!
    subDomain: String!
  }

  type Query {
    getAllUsers: [User!]!
  }

  input CreateUserInput {
    email: String
    password: String
  }
  type Mutation {
    createUser(userInput: CreateUserInput!): User
  }
`;
module.exports = typeDefs;
