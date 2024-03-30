import { Component, Input, OnInit } from '@angular/core';
import {  faComments } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrl: './post-tile.component.css'
})
export class PostTileComponent implements OnInit {

  @Input()
  posts$!: Array<PostModel>;

  faComments = faComments;

  constructor(private postService: PostService ) { 
    this.postService.getAllPost().subscribe(post => {
      this.posts$ = post;
    });
  }

  ngOnInit(): void {
  }

}