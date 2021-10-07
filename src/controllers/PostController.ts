import { Controller, Get, Post } from "@tsed/common";
import { Inject } from "@tsed/di";
import { randomBytes } from "crypto";
import { VideoPostMetadataRepository } from "src/services/VideoPostMetadataRepository";
import { VideoPostRepository } from "src/services/VideoPostRepository";

function random(min: number, max: number) {
  return ~~(Math.random() * (max - min + 1)) + min
}

@Controller("/posts")
export class PostController {

  @Inject()
  videoPostRepository: VideoPostRepository;

  @Inject()
  videoPostMetadataRepository: VideoPostMetadataRepository;

  @Get("/")
  get() {
    return this.videoPostMetadataRepository.find();
  }

  @Post("/")
  async post() {
    const r = randomBytes(16).toString("hex");
    const post = await this.videoPostRepository.add({
      thumbnail: `https://thumbnail.com/${r}`,
      title: `Title ${r}`,
      content: `Content ${r}`
    });
    const c = random(1, 5);
    for (let i = 0; i < c; i++) {
      await this.videoPostMetadataRepository.add({
        postId: post._id,
        quality: randomBytes(4).toString("hex"),
        url: `https://video.com/${randomBytes(16).toString("hex")}`
      })
    }
  }
}
