import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MovieFinder';
  resultsObject: Object;
  movie: Object;
  searchMovie = new Subject<string>();
  movieId = sessionStorage.getItem('movieId');
  visible = true;

  navDiv() {
    this.visible = !this.visible;
  }

  constructor(private searchService: SearchService, private http: Http) {
    this.searchService.search(this.searchMovie)
    .subscribe(results => {
      this.resultsObject = results.Search;
    });
  }

}
