import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  information;
  listOfInformation;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

  postInformation() {
    this.itemsService.putInItem(this.information);
  }

  clearInformation() {
    this.information = '';
  }

}
