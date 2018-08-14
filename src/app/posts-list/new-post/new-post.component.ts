import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private postsService: PostsService,private router: Router) { }

  ngOnInit() {
    this.postForm=this.formBuilder.group({
      title: ['', Validators.required],
      texte: ['', Validators.required]
    });
  }

  onSavePost(){
    const title = this.postForm.get('title').value;
    const texte = this.postForm.get('texte').value;

    const newPost = new Post(title, texte, 0, new Date());

    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
