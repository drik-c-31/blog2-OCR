import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[]=[];
  postsSubject = new Subject<Post[]>();

  constructor(){
    this.posts=[
	new Post('Une date importante','Celle de ma naissance... Sans cet évènement, vous n\'auriez pas eu ce projet à corriger. Il ne fera pas date, forcément, il fait le nécessaire, rien de plus, rien  de moins...',3,new Date(268257600000)),
	new Post('blog Angular','je ne sais pas quoi écrire de plus si ce n\'est que je pense que tout est complet dans cet exemple, et que le projet est réussi. En espérant que la correction ne mettra pas trop de temps...',-1,new Date(1532533500000)),
	new Post('et un petit troisième','Afin d\'avoir au lancement les 3 valeurs possibles pour le nb de loveIts : positif, négatif ou égal à 0...',0,new Date(1532433500000))
  ];
    this.emitPosts();
  }

  emitPosts(){
    this.postsSubject.next(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }


  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  plusLove(i: number){
    this.posts[i].loveIts++;
    this.emitPosts();
  }

  moinsLove(i: number){
    this.posts[i].loveIts--;
    this.emitPosts();
  }
}
