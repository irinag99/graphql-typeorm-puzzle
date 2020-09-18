import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    recipes(name: String ingredients: String idCategory: Int ) recipe: Recipe
  }
  
  type Query {
      oneRecipe: Recipe
  }

  type Mutation {
    deleteRecipe: Recipe
    createMyRecipe(input: createMyRecipeInput): Recipe
  }

  input createMyRecipeInput{
    name: String!
    description: String!
    ingredients: String!
    idUser: Int!
    idCategory: Int!
  }

  type Recipe {
    id: Int!
    name: String!
    description: String!
    ingredients: String!
    idUser: Int!
    idCategory: Int!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`; 
