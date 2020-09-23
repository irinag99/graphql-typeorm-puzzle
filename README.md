# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command


Steps to run in Heroku site:

-to start the app run https://recipe-challenge-puzzle.herokuapp.com/graphql

-the first thing to do is to signup, because every query and every mutation have access only with a token. 

-Add token in http headers: 
{
  "Authorization": "Bearer *TOKEN*"
}

mutation signup{
  signup(
    input: {
      name: "" ,
      email: "",  
      password: "" 
    }
  )
}

-mutation to create category
mutation{
  createCategory(data: {
    name:"" 
  }) {
    id
    name
  }
}

-mutation to create a recipe
mutation{
  createRecipe(data: {
    name:"",
    description: "",
    ingredients: "",
    userId: ,
    categoryId: 
  }) {
    id
    name
  }
}

-query to get your own recipes
query{
  myRecipes(userId: ){
    name
  }
}