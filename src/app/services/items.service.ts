import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ItemsService {

  data;
  dataLoaded = new Subject<void>();
  constructor(private httpClient: HttpClient) { }

  putInItem(item) {
    this.httpClient.post('http://localhost:2020/input-survey', {description: item}).subscribe();
  }

  getItems() {
    return this.httpClient.get('http://localhost:2020/show-survey').subscribe(data => {
      this.data = data;
      this.dataLoaded.next();
    },
    error => {
      console.log(error);
    });
  }

  deleteItems(list) {
    return this.httpClient.post('http://localhost:2020/delete-survey', list).subscribe();
  }
}
