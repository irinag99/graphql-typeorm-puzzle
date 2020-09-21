import { Resolver, Query, Arg, Mutation, Ctx } from "type-graphql";

import { Recipe } from "../entity/Recipe";
import { createRecipeInput } from "../inputs/createInput";

@Resolver()
export class RecipeResolver {
  @Query(() => [Recipe])
  async recipes(
    @Ctx() ctx: { email: any },
    @Arg("name", { nullable: true }) name?: string,
    @Arg("ingredients", { nullable: true }) ingredients?: string,
    @Arg("categoryId", { nullable: true }) categoryId?: number
  ) {
    if (!ctx.email) {
      throw new Error('No user authenticated');
    }
    let recipes: Recipe[] = await Recipe.find();
    if (name) {
      recipes = recipes.filter(recipe => recipe.name === name);
    }

    if (ingredients) {
      recipes = recipes.filter(recipe => recipe.ingredients.includes(ingredients));
    }

    if (categoryId) {
      recipes = recipes.filter(recipe => recipe.categoryId === categoryId);
    }

    return recipes

  }

  @Query(() => Recipe)
  oneRecipe(@Ctx() ctx: { email: any },
    @Arg("name") name: string) {
    if (!ctx.email) {
      throw new Error('No user authenticated');
    }
    return Recipe.findOne({
      where: {
        name
      }
    });

  }

  @Mutation(() => Boolean)
  async deleteRecipe(@Ctx() ctx: { email: any },
    @Arg("id") id: string) {
    if (!ctx.email) {
      throw new Error('No user authenticated');
    }
    const recipe = await Recipe.findOne({ where: { id } });
    if (!recipe) throw new Error("Recipe not found!");
    await recipe.remove();

    return true;
  }

  @Mutation(() => Recipe)
  async createRecipe(@Ctx() ctx: { email: any },
    @Arg("data") data: createRecipeInput) {
    if (!ctx.email) {
      throw new Error('No user authenticated');
    }
    const recipe = Recipe.create(data);
    await recipe.save();

    return recipe;
  }

  @Query(() => [Recipe])
   async myRecipes(@Ctx() ctx: { email: any },
    @Arg("userId") userId: number) {
    if (!ctx.email) {
      throw new Error('No user authenticated');
    }
    const recipes = await Recipe.find({
      where: {
        userId
      }
    })
    console.log(recipes);
    if (!recipes) throw new Error("No recipes for this user");
    return recipes;
  }
};
