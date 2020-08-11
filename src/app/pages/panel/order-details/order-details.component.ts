import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MinhaContaService } from 'src/app/_services/minha-conta.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  selectedId: number;

  constructor(private route: ActivatedRoute, private srv: MinhaContaService ) {}

  ngOnInit(): void {
    this.selectedId = this.route.snapshot.params['id']
  }

}
