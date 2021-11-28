import { Component, OnInit } from '@angular/core';
import { ColletServiceService } from 'src/app/services/collet-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _collets: ColletServiceService) { }

  ngOnInit(): void {
  }

}
