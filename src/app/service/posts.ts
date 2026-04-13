import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Ipost } from '../model/posts';

@Injectable({
  providedIn: 'root',
})
export class Posts {

  private readonly BASE_URL = environment.BASE_URL;
  private readonly POSTS_URL = `${this.BASE_URL}/posts.json`;

  private _http = inject(HttpClient);

  postsSignal = signal<Ipost[]>([]);

  fetchposts(): Observable<Ipost[]> {
    return this._http.get<Record<string, Ipost>>(this.POSTS_URL).pipe(

      map((res: any) => {
  if (!res) return [];

  const postsArr: Ipost[] = [];

  for (const key in res) {
    if (res[key]?.['0']) {
      postsArr.push({
        ...res[key]['0'],   // 🔥 important
        id: key
      });
    }
  }

  return postsArr;
}),

      tap((posts) => {
        this.postsSignal.set(posts);
      })
    );
  }
}