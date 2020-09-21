import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    recipes(name: String ingredients: String categoryId: Int ) : [Recipe]
  }
  
  type Query {
      oneRecipe: Recipe
  }

  type Query {
    myRecipes(userId: Int): [Recipe]
  }

  type Mutation {
    deleteRecipe: Recipe
    createRecipe(input: createRecipeInput): Recipe
  }

  input createRecipeInput{
    name: String!
    description: String!
    ingredients: String!
    userId: Int!
    categoryId: Int!
  }

  type Recipe {
    id: Int!
    name: String!
    description: String!
    ingredients: String!
    userId: Int!
    categoryId: Int!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`; 
