import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs';
import { ColletServiceService } from 'src/app/services/collet-service.service';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.css']
})
export class HelpsComponent implements OnInit {
  public collets: any = [];

  constructor(public _collets: ColletServiceService) { 
    _collets.getAllCollets().pipe(
      pluck('collets'),
      map((collets: any) => this.collets = collets)      
    ).subscribe(
      console.log
    );
  }

  ngOnInit(): void {
  }

}

