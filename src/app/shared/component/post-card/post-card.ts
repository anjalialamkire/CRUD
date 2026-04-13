import { Component, Input } from '@angular/core';
import { Ipost } from '../../../model/posts';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatAnchor, RouterLink],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
})
export class PostCard {
  @Input() postobj!: Ipost;
}