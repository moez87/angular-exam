import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  posts:any

  constructor() { }

  ngOnInit(): void {

    this.posts=JSON.parse(localStorage.getItem('posts') || '[]');
  }
  
  deletepost(){

  }

}
