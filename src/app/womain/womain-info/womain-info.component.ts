import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-womain-info',
  templateUrl: './womain-info.component.html',
  styleUrls: ['./womain-info.component.css']
})
export class WomainInfoComponent implements OnInit {
  @Input() wolo9: string;
  constructor() {
    console.log("wolo9 : " + this.wolo9);
  }

  ngOnInit() {


  }

}
