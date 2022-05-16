import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService :PostServiceService) { }

  posts:any[]=[]
  somethingWrong:any;
  ngOnInit(): void {
    this.postService.getPosts().subscribe(data=>{
      this.posts=data;
    },errorData=>{
     this.somethingWrong=errorData;
    })
  }

}
