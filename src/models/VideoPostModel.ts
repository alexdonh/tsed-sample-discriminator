import { Model } from "@tsed/mongoose";
import { Required } from "@tsed/schema";
import { PostModel } from "./PostModel";
// import { VideoPostMetadataModel } from "./VideoPostMetadataModel";

@Model({ discriminatorValue: "video" })
export class VideoPostModel extends PostModel {
  @Required()
  thumbnail: string;

  // @VirtualRef({
  //   ref: VideoPostMetadataModel,
  //   localField: "_id",
  //   foreignField: "postId"
  // })
  // metadata: VirtualRefs<VideoPostMetadataModel>
}
