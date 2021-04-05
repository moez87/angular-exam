import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  submitted = false;
  addPostForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    date: new FormControl(new Date()),
  });

  constructor() { }

  ngOnInit(): void {
  }
  addPost() {
  
      this.submitted=true;
      if (this.addPostForm.invalid)
      {
       return; 
      }
      let posts= JSON.parse(localStorage.getItem('posts') || '[]');
      posts.push(this.addPostForm.value);
      localStorage.setItem('posts',JSON.stringify(posts));
    }

  }


