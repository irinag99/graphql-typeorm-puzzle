import {Entity, PrimaryGeneratedColumn,BaseEntity,  Column, OneToMany} from "typeorm";
import { ObjectType, Field } from 'type-graphql';

import { Recipe } from "../entity/Recipe";

@ObjectType()
@Entity()
export class Category extends BaseEntity  {

    @Field(() => Number)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    createdAt: number;

    @Field(() => String)
    @Column()
    updatedAt: number;

    @Field(() => String)
    @Column()
    deletedAt: number;

    @OneToMany(() => Recipe, recipe => recipe.category)
    recipes: Recipe;
    
}
