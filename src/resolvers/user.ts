import { Resolver, Query, Mutation, Arg } from "type-graphql";
import * as bcrypt from 'bcrypt';
import { sign } from "jsonwebtoken";
import { CreateUserInput, LoginUserInput } from '../inputs/userInput';
import { User } from "../entity/User";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users() {
    return User.find();
  }

  @Mutation(() => String)
  async signup(@Arg("input") input: CreateUserInput) {
    const emailUser = await User.findOne({ where: { email: input.email } });
    if (emailUser) {
      throw new Error('email in use')
    } else {
      let user = User.create(input);
      const password = input.password;
      const passwordEncrypted = bcrypt.hashSync(password, 12);
      user.password = passwordEncrypted;
      await user.save();
      const inputLogin: LoginUserInput = { email: input.email, password }
      return await this.login(inputLogin)
    }

  }

  @Mutation(() => String)
  async login(@Arg("input") input: LoginUserInput) {
    const user = await User.findOne({ where: { email: input.email } });
    if (!user) {
      return 'no user found';
    }

    const passwordValid = await bcrypt.compare(input.password, user.password)
    if (!passwordValid) {
      return 'incorrect password';
    }

    const accessToken = sign({ email: input.email }, process.env.SECRET_KEY || 'secretKey', { expiresIn: "15 min" });

    return accessToken;
  }
};
