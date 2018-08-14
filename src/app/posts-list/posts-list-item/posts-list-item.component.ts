import { Component,Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.scss']
})
export class PostsListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }
  getColor(){
	if(this.post.loveIts>0){
		return 'lightgreen';
	}else if(this.post.loveIts<0){
		return 'lightcoral';
	}else{
		return 'white';
	}
  }
  onPlusLove(){
	this.postsService.plusLove(this.index);
  }
  onMoinsLove(){
	this.postsService.moinsLove(this.index);
  }
  onSupprimer(){
  	this.postsService.removePost(this.post);
  }
}
