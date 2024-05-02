import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class FileService {
  Clientient = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("file uplodad service error", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("file delette service error", error);
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appWriteBucketId, fileId);
  }
}

const fileService = new FileService();
export default fileService;
