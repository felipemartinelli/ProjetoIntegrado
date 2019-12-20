import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.acharTodos();
  }

  acharTodos(){
    this.postService.retornaTodas().subscribe((postOut: Post[]) => this.posts = postOut);
    console.log(this.posts);
    }
}
