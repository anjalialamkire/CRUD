import { Component } from '@angular/core';
import { Ipost } from '../../../model/posts';

@Component({
  selector: 'app-post-details',
  imports: [],
  templateUrl: './post-details.html',
  styleUrl: './post-details.scss',
})
export class PostDetails {
 post !: Ipost
}
