import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
var sortObjectsArray = require('sort-objects-array');
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data;
  myArray;
  constructor(
    public http: HttpClient,
  ) {
      this.load();
    }

  load(): any {
    return this.http.get("assets/newsData.json")
    .pipe(map((data)=>{
      this.myArray = data;
      this.sortArray(this.myArray);
    }))
    .toPromise().then(()=>{
      return;
    });
  }

  sortArray(array){
    let myArray;
    myArray = sortObjectsArray(array, 'published_date');
    console.log(myArray);
  }

  ngOnInit() {

  }

}
