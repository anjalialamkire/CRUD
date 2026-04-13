import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Ipost } from '../model/posts';

@Injectable({
  providedIn: 'root',
})
export class Posts {
  postsArr : any 
  private readonly BASE_URL : string = environment.BASE_URL
  private readonly POSTS_URL : string = `${this.BASE_URL}/posts.json`
  private _http = inject(HttpClient)
 postsSignal = signal <Ipost[]>([])

  fetchposts(): Observable<Ipost[]>{
    return this._http.get(this.POSTS_URL).pipe(
      map ((res :any) =>{
        let postsArr :Array <Ipost> =[]
        for(const key in res){
          postsArr.push({...res[key],id : key})
        }
        return postsArr 
      }),
      tap(posts  =>{
        this.postsSignal.set(posts)
      })
    )
  }
}
