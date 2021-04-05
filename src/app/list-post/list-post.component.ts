import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  posts:any

  constructor(private postService:PostService) { }

  ngOnInit(): void {

    this.posts=JSON.parse(localStorage.getItem('posts') || '[]');
  }
  
  delete(i:number){
    this.postService.deletePostByIndex(i)
    this.posts= this.postService.getAllPosts()
    
  }


}
