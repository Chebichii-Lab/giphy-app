import { Component, OnInit } from '@angular/core';
import { GiphyServiceService } from '../giphy-service.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  randomGif: any;

  constructor(private servive: GiphyServiceService) { }

  ngOnInit() {
    this.servive.randomGif()
    .subscribe((response: { [x: string]: any; }) => {
      // tslint:disable-next-line: no-string-literal
      this.randomGif = response['data'];
    });
  }

}
