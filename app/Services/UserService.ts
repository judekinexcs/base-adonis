import Env from "@ioc:Adonis/Core/Env";
import UserRepository from "App/Repositories/UserRepository";

export default class HorseCardService {
  private user = new UserRepository();

  async getUser(): Promise<any> {
    return await this.user.getOne();
  }
}
