import { InputType, Field } from "type-graphql";

@InputType()
export class createCategoryInput {
  @Field()
  name: string;
}

@InputType()
export class createMyRecipeInput{
  @Field()
  name: string
  
  @Field()
  description: string

  @Field()
  ingredients: string

  @Field()
  idUser: number

  @Field()
  idCategory: number
}