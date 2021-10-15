import { Model, VirtualRef } from "@tsed/mongoose";
import { Ignore, Required } from "@tsed/schema";
import { PostMetadataModel } from "./PostMetadataModel";
import { VideoPostModel } from "./VideoPostModel";

@Model({ discriminatorValue: "video" })
export class VideoPostMetadataModel extends PostMetadataModel {
  @Required()
  quality: string;

  @Required()
  url: string;

  @Ignore()
  postId: string;

  @VirtualRef({
    ref: VideoPostModel,
    localField: "postId",
    foreignField: "_id",
    justOne: true
  })
  post: VirtualRef<VideoPostModel>
}
