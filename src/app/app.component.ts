import {Component, OnInit} from '@angular/core';
import {PhotosService} from "./services/photos.service";
import {Photo} from "./models/Photos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{

  albunsId = [1,2,3];
  constructor(private servicePhoto: PhotosService) {
  }
  ngOnInit(): void {

  }

}
