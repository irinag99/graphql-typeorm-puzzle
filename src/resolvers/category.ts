import { Resolver, Query, Arg, Mutation, Ctx } from "type-graphql";
import { createCategoryInput } from "../inputs/createInput";
import { updateCategoryInput } from "../inputs/updateInput";
import { Category } from "../entity/Category";

@Resolver()
export class CategoryResolver {
  @Query(() => [Category])
  async categories(@Ctx() ctx: { email: any },) {
    if (!ctx.email) {
      throw new Error('No user authenticated');
    }
    return await Category.find();
  }

  @Query(() => Category)
  oneCategory(@Ctx() ctx: { email: any },
    @Arg("name") name: string) {
    if (!ctx.email) {
      throw new Error('No user authenticated');
    }
    return Category.findOne({
      where: {
        name
      }
    });
  }

  @Mutation(() => Boolean)
  async deleteCategory(@Ctx() ctx: { email: any },
    @Arg("id") id: string) {
    if (!ctx.email) {
      throw new Error('No user authenticated');
    }
    const category = await Category.findOne({ where: { id } });
    if (!category) throw new Error("Category not found!");
    await category.remove();

    return true;

  }

  @Mutation(() => Category)
  async createCategory(@Ctx() ctx: { email: any },
    @Arg("data") data: createCategoryInput) {
    if (!ctx.email) {
      throw new Error('No user authenticated');
    }
    const category = Category.create(data);
    await category.save();

    return category;

  }

  @Mutation(() => Category)
  async updateCategory(@Ctx() ctx: { email: any },
    @Arg("id") id: string,
    @Arg("data") data: updateCategoryInput) {
    if (!ctx.email) {
      throw new Error('No user authenticated');
    }
    const category = await Category.findOne({ where: { id } });
    if (!category) throw new Error("Category not found");
    Object.assign(category, data);
    await category.save();

    return category;

  }
};
