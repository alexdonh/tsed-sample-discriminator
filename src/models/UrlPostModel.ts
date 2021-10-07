import { Model } from "@tsed/mongoose";
import { Required } from "@tsed/schema";
import { PostModel } from "./PostModel";

@Model({ discriminatorValue: "url" })
export class UrlPostModel extends PostModel {
  @Required()
  url: string;
}
