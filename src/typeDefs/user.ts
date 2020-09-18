import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    users user: User
  }

  type Mutation {
    signup(input:CreateUserInput): String
    login(input: LoginUserInput): Token
  }

  input LoginUserInput {
    email: String!
    password: String!
  }

  type Token{
    token: String!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }

  type User {
    id: Int!
    name: String!
    email: String!
    password: String!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`; 
