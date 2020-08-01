import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getvalues();
  }
  getvalues()
  {
    this.http.get('http://localhost:59164/api/value').subscribe(response =>
    {
this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
