import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  addPostBlog(postData:any)
  {
    let addPost=JSON.parse(localStorage.getItem('posts')  ||'[]' )

    addPost.push(postData)
    localStorage.setItem('posts',JSON.stringify(addPost))
  }

  getAllPosts()
  {
   return JSON.parse(localStorage.getItem('posts')  ||'[]')
  }

  getPostByIndex(index:number)
  {let listPost=JSON.parse(localStorage.getItem('posts') || '[]' )
    return listPost[index]
  }

  updatePostDataByIndex(updatePost:any,index:number)
  {
    let listPost= JSON.parse(localStorage.getItem('posts') || '[]')
    listPost.splice(index,1,updatePost);
    localStorage.setItem('posts',JSON.stringify(listPost))
  }

  deletePostByIndex(index:number)
  {
    let listPost= JSON.parse(localStorage.getItem('posts') || '[]')
    listPost.splice(index,1)
    localStorage.setItem('posts',JSON.stringify(listPost))
  }
}
