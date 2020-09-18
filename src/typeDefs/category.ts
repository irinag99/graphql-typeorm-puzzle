import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    categories: Category
  }

  type Query {
    oneCategory: Category
  }

  type Mutation {
    deleteCategory: Category
    createCategory(input: createCategoryInput): Category
    updateCategory(input: updateCategoryInput): Category
  }

  input createCategoryInput{
    name: String!
  }

  input updateCategoryInput{
    name: String
  }

  type Category {
    id: Int!
    name: String!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`; 
