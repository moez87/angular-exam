import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
 submitted=false;
 updatePostForm: FormGroup = new FormGroup({
  id: new FormControl(''),
  title: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required]),
  category: new FormControl('', [Validators.required]),
  
});
 

  constructor() { }

  ngOnInit(): void {
  }
  updatePost(){

    
  }

}
