import { Entity, PrimaryGeneratedColumn,BaseEntity,  Column, OneToMany } from "typeorm";
import { ObjectType, Field } from 'type-graphql';
import { Recipe } from "../entity/Recipe";

@ObjectType()
@Entity()
export class User extends BaseEntity  {

    @Field(() => Number)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    email: string;

    @Field(() => String)
    @Column()
    password: string;

    @Field(() => String)
    @Column()
    createdAt: number;

    @Field(() => String)
    @Column()
    updatedAt: number;

    @Field(() => String)
    @Column()
    deletedAt: number;

    @OneToMany(() => Recipe, recipe => recipe.user)
    recipes: Recipe;
    

}
