import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyServiceService {
  private apiKey = environment.api_key;
  private query: string | undefined;
  randomGif: any;

  constructor(private http: HttpClient) { }

  getGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${this.query}&limit=50&offset=0&rating=G&lang=en`);
  }
  trendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=50&rating=G`);
  }
  searchGifs(query: string) {
    this.query = query;
  }
}
