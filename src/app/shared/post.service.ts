import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from './post-model';
import { CreatePostPayload } from '../post/create-post/create-post.payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPost(): Observable<Array<PostModel>>{
    return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/');
  }
  getAllPostsByUser(name: string) {
    return this.http.get<PostModel[]>('http://localhost:8080/api/posts/by-user/' + name);
  }
  getPost(postId: number): Observable<PostModel>{
    return this.http.get<PostModel>('http://localhost:8080/api/posts/' + postId);
  }
  
  createPost(postPayload : CreatePostPayload): Observable<any>{
    return this.http.post('http://localhost:8080/api/posts/',postPayload);
  }
}
