import conf from '../conf/conf';
import {Client,Databases,ID,Storage,Query} from 'appwrite'

//Collection - Table
//Document - Row in a Table

export class Service{
client = new Client();
databases;
bucket;

constructor() {
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId); 
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
}

async createPost({title,slug,content,featuredImage,status,userId}){
  try {
    return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
            title,
            content,
            featuredImage,
            status,
            userId
        }

    )
  } catch (error) {
    throw error;
  }
}

async updatePost(slug,{title,content,featuredImage,status}){
    try {
        return await this.databases.updateDocument( 
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
              title,
              content,
              featuredImage,
              status
            })
    } catch (error) {
        throw error;
    }
}

async deletePost({slug}){
    try {
       return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
       ) 
       return true;
    } catch (error) {
        throw error;
        return false;
    }
}

async getPost({slug}){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
            )

    } catch (error) {
        throw error;
        return false;
    }
}

async getPosts(queries = [Query.equal("status","active")]){

    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
            )
        
    } catch (error) {
       console.log(error); 
       return false;
    }

}

// File upload services

async uploadFile(file){
 try {
    return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
    )
 } catch (error) {
    console.log(error);
    return false;
 }
}

async deleteFile(fileId){
 try {
    return await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
    )
 } catch (error) {
    console.log(error);
    return false;
 }
}

getFilePreview(fileId){
   try {
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
    return true
   } catch (error) {
    console.log(error);
    return false;
   }
}


}

const service = new Service()
export default service