import { Component, Input } from '@angular/core';
import { Ipost } from '../../../model/posts';
import { MatCardModule } from "@angular/material/card";
import { MatAnchor } from "@angular/material/button";


@Component({
  selector: 'app-post-card',
  imports: [MatCardModule, MatAnchor],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
})
export class PostCard {
  @Input() postobj !: Ipost
}
