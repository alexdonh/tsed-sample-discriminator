import { DiscriminatorKey, Model, ObjectID } from "@tsed/mongoose";

@Model({ name: "post_metadatas" })
export class PostMetadataModel {
  @ObjectID()
  _id: string;

  @DiscriminatorKey()
  type: string;
}
