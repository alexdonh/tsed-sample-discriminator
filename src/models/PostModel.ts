import { DiscriminatorKey, Model, ObjectID } from "@tsed/mongoose";
import {Optional, Property, Required} from "@tsed/schema";

@Model({ name: "posts" })
export class PostModel {
  @ObjectID("id")
  _id: string;

  @Required()
  title: string;

  @Optional()
  content: string;

  @DiscriminatorKey()
  type: string;
}
