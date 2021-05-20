import { Component, OnInit } from '@angular/core';
import { GiphyServiceService } from '../giphy-service.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
trendingGifs: any;

  constructor(private service: GiphyServiceService) { }

  ngOnInit(){
    this.service.trendingGifs()
    .subscribe((response: { [x: string]: any; } )=> {
      // tslint:disable-next-line: no-string-literal
      this.trendingGifs = response['data'];
    });
  }

}
