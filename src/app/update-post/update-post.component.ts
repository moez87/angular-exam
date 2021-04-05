import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
 submitted=false;
 index:any
 updatePostForm: FormGroup = new FormGroup({
  id: new FormControl(''),
  title: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required]),
  category: new FormControl('', [Validators.required]),
  
});
 

constructor(private postService:PostService,private route:ActivatedRoute,private router:Router) { }

ngOnInit(): void {
  this.index=this.route.snapshot.params['i']; 
  this.showData()
}
showData() {
  let data= this.postService.getPostByIndex(this.index)
  this.updatePostForm.patchValue(data)
  console.log(this.index);

}
updatePost(){
  this.submitted=true;
  this.postService.updatePostDataByIndex(this.updatePostForm.value,this.index)
  this.router.navigateByUrl('/list-post')
}


}
