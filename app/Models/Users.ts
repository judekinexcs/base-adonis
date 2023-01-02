import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Users extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
}
