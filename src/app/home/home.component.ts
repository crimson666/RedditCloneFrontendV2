import { Component, OnInit } from '@angular/core';
import { PostModel } from '../shared/post-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  posts$: Array<PostModel> = [];

  constructor() {}

  ngOnInit(): void {}

}