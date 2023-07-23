import { Component, OnInit } from '@angular/core';
import { RequestService } from '../core/services/request.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  jsonData: any;

  constructor(private requestService: RequestService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOninit(): void {
    this.requestService.getJsonData().subscribe(data => {
      this.jsonData = data;
    });
  }
}
