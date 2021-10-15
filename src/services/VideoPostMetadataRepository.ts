import { Inject, Injectable } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { PostMetadataModel } from "src/models/PostMetadataModel";
import { PostModel } from "src/models/PostModel";
import { VideoPostMetadataModel } from "src/models/VideoPostMetadataModel";

@Injectable({
  // deps: [PostMetadataModel]
})
export class VideoPostMetadataRepository {
  @Inject(VideoPostMetadataModel) private model: MongooseModel<VideoPostMetadataModel>;

  async add(obj: Partial<VideoPostMetadataModel>) {
    const doc = new this.model(obj);
    await doc.save();
    return doc;
  }

  async find(query: any = {}) {
    return this.model.find(query).populate("post").exec();
  }
}