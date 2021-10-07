import { Inject, Injectable } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { PostModel } from "src/models/PostModel";
import { VideoPostModel } from "src/models/VideoPostModel";

@Injectable({
  deps: [PostModel]
})
export class VideoPostRepository {
  @Inject(VideoPostModel) private model: MongooseModel<VideoPostModel>;

  async add(obj: Partial<VideoPostModel>) {
    const doc = new this.model(obj);
    await doc.save();
    return doc;
  }

  async find(query: any = {}) {
    return this.model.find(query)/*.populate("metadata")*/.exec();
  }
}