import { Entity, PrimaryGeneratedColumn,BaseEntity,  Column, ManyToOne } from "typeorm";
import { ObjectType, Field } from 'type-graphql';

import { User } from "../entity/User";
import { Category } from "../entity/Category";



@ObjectType()
@Entity()
export class Recipe extends BaseEntity  {

    @Field(() => Number)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    description: string;

    @Field(() => String)
    @Column()
    ingredients: string;

    @Field(() => String)
    @Column()
    idUser: number;

    @Field(() => String)
    @Column()
    idCategory: number;

    @Field(() => String)
    @Column()
    createdAt: number;

    @Field(() => String)
    @Column()
    updatedAt: number;

    @Field(() => String)
    @Column()
    deletedAt: number;

    @ManyToOne(() => User, user => user.recipes)
    user: User;

    @ManyToOne(() => Category, category => category.recipes)
    category: Category;

}







