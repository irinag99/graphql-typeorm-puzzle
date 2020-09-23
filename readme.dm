-to start the app run https://recipe-challenge-puzzle.herokuapp.com/graphql

-the first thing to do is to signup, because every query and every mutation have access only with a token. 

-
mutation signup{
  signup(
    input: {
      name: "" ,(name)
      email: "", (email) 
      password: "123" (password)
    }
  )
}