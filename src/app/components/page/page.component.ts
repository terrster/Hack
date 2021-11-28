import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColletServiceService } from 'src/app/services/collet-service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(
    public _collets: ColletServiceService,
    private _activedRouter: ActivatedRoute,
  ) {
    _collets.getCollet(_activedRouter.snapshot.params['id']).pipe().subscribe(console.log);
   }

  ngOnInit(): void {
  }

}
