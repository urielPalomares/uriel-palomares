import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = 'https://newscatcher.p.rapidapi.com/v1/';
  params = {lang: 'es', media: 'True'};
  headers = {
    'X-RapidAPI-Key': '67af68461emsh6073e04fe1a3010p18830bjsned6afc03bdf3',
    'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
  }
  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get(this.url + 'sources', { headers: this.headers, params: {lang: 'es'} });
  }
  
  initArticles() {
    return this.http.get(this.url + 'latest_headlines', { headers: this.headers, params: this.params });
  }
  
  getArticlesByID(source: any) {
    return this.http.get(this.url + 'search', { headers: this.headers, 
        params: {
          q: 'Tech',
          lang: 'es',
          sort_by: 'relevancy',
          sources: source,
          media: 'True'
        },
    });
  }

}