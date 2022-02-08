import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-old-testaments',
  templateUrl: './old-testaments.component.html',
  styleUrls: ['./old-testaments.component.scss'],
})
export class OldTestamentsComponent implements OnInit {

  @Input() hasHeader: boolean;
  @Input() verse: string;
  @Input() verseText: string;

  constructor() { }

  ngOnInit() {}

}
