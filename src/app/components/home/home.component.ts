import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs';
import { ColletServiceService } from 'src/app/services/collet-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _collets: ColletServiceService) {}

  ngOnInit(): void {
  }

}
