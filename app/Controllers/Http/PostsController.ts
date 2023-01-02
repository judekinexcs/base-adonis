import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from "App/Services/UserService";

export default class PostsController {
  private userService = new UserService();

  public async index(ctx: HttpContextContract) {
    const result = await this.userService.getUser();
    console.log({result})
    return [
      {
        id: 1,
        title: 'Hello world',
      },
      {
        id: 2,
        title: 'Hello universe',
      },
    ]
  }
}
