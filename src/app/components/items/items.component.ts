import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  deleteList = [];
  data;

  constructor(private itemsService: ItemsService) { }



  ngOnInit() {
    this.itemsService.getItems();
    this.itemsService.dataLoaded.subscribe(() => {
      this.data = this.itemsService.data;
    });
  }

  modifyData(index) {

    if (this.deleteList.indexOf(this.data[index]) === -1) {
      this.deleteList.push(this.data[index]);
    } else {
      this.deleteList.splice(index);
    }
  }

  delete() {
    this.itemsService.deleteItems(this.deleteList);

    this.deleteList.forEach(deletedItems => {
      if (this.data.indexOf(deletedItems) !== -1) {
        this.data.splice([this.data.indexOf(deletedItems)]);
      }
    });
  }
}
