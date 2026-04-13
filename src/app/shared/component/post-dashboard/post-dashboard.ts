import { Component, inject, OnInit } from '@angular/core';
import { Posts } from '../../../service/posts';
import { PostCard } from '../post-card/post-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-dashboard',
  standalone: true,
  imports: [PostCard, CommonModule], // ✅ ADD THIS
  templateUrl: './post-dashboard.html',
  styleUrl: './post-dashboard.scss',
})
export class PostDashboard implements OnInit {

  _postsService = inject(Posts);

  ngOnInit(): void {
    this._postsService.fetchposts().subscribe({
      next: (data) => {
        console.log(data);
      }
    });
  }
}