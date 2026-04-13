import { Component, inject, OnInit } from '@angular/core';
import { Posts } from '../../../service/posts';
import { PostCard } from '../post-card/post-card';

@Component({
  selector: 'app-post-dashboard',
  imports: [PostCard],
  templateUrl: './post-dashboard.html',
  styleUrl: './post-dashboard.scss',
  standalone : true
})
export class PostDashboard implements OnInit {

 
  _postsService = inject(Posts)

  ngOnInit(): void {
     this._postsService.fetchposts()
       .subscribe({
        next : data =>{
          console.log(data);
        }
       })
  }
}
