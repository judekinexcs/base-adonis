import Users from "App/Models/Users";

export default class UserRepository {
  async getOne(): Promise<Users | null> {
    const result = await Users.query().first();
    console.log("zôoooo123")

    console.log({result})
    return result;
  }

  async getAll(): Promise<any> {
    const users = await Users.all();
    return users;
  }
}
