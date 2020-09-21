import { InputType, Field } from "type-graphql";

@InputType()
export class createCategoryInput {
  @Field()
  name: string;
}

@InputType()
export class createRecipeInput{
  @Field()
  name: string
  
  @Field()
  description: string

  @Field()
  ingredients: string

  @Field()
  userId: number

  @Field()
  categoryId: number
}