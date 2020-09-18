import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { createCategoryInput } from "../inputs/createInput";
import { updateCategoryInput } from "../inputs/updateInput";
import { Category } from "../entity/Category";

@Resolver()
export class CategoryResolver {
  @Query(() => [Category])
  async categories() {
    return await Category.find();
  }

  @Query(() => Category)
  oneCategory(@Arg("name") name: string) {
    return Category.findOne({
      where: {
        name
      }
    });
  }

  @Mutation(() => Boolean)
  async deleteCategory(@Arg("id") id: string) {
    const category = await Category.findOne({ where: { id } });
    if (!category) throw new Error("Category not found!");
    await category.remove();

    return true;

  }

  @Mutation(() => Category)
  async createCategory(@Arg("data") data: createCategoryInput) {
    const category = Category.create(data);
    await category.save();

    return category;

  }

  @Mutation(() => Category)
  async updateCategory(@Arg("id") id: string, @Arg("data") data: updateCategoryInput) {
    const category = await Category.findOne({ where: { id } });
    if (!category) throw new Error("Category not found");
    Object.assign(category, data);
    await category.save();

    return category;

  }
};
