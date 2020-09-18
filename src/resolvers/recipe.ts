import { Resolver, Query, Arg, Mutation, Ctx } from "type-graphql";

import { Recipe } from "../entity/Recipe";
import { createMyRecipeInput } from "../inputs/createInput";

@Resolver()
export class RecipeResolver {
  @Query(() => [Recipe])
   async recipes(
    @Ctx() ctx: {email: any},
    @Arg("name", { nullable: true }) name?: string,
    @Arg("ingredients", { nullable: true }) ingredients?: string,
    @Arg("idCategory", { nullable: true }) idCategory?: number
  ) {
    if(!ctx.email) {
      throw new Error('No user authenticated');
    }
    let recipes: Recipe[] = await Recipe.find();
    if (name) {
      recipes = recipes.filter(recipe => recipe.name === name);
    }

    if (ingredients) {
      recipes = recipes.filter(recipe => recipe.ingredients.includes(ingredients));
    }

    if (idCategory) {
      recipes = recipes.filter(recipe => recipe.idCategory === idCategory);
    }

    return recipes

  }

  @Query(() => Recipe)
  oneRecipe(@Arg("name") name: string) {
    return Recipe.findOne({
      where: {
        name
      }
    });

  }

  @Mutation(() => Boolean)
  async deleteRecipe(@Arg("id") id: string) {
    const recipe = await Recipe.findOne({ where: { id } });
    if (!recipe) throw new Error("Recipe not found!");
    await recipe.remove();

    return true;
  }

  @Mutation(() => Recipe)
  async createMyRecipe(@Arg("data") data: createMyRecipeInput) {
    const recipe = Recipe.create(data);
    await recipe.save();

    return recipe;
  }
};
