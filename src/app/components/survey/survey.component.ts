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
  submission;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

  postInformation() {
    this.itemsService.putInItem(this.information);
    this.information = '';
    this.submission = 'Submitted, thanks for your feedback!';
  }

  clearInformation() {
    this.information = '';
    this.submission = 'Post cleared!';

  }

}
