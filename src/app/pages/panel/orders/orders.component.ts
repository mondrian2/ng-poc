import { Component, OnInit } from '@angular/core';
import { MinhaContaService } from 'src/app/_services/minha-conta.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  pedidos: any;
  
  constructor(private srv: MinhaContaService) { }

  ngOnInit(): void {
    this.srv.getPedidos(2492308).subscribe(p => {
      this.pedidos = p
    })
  }

}

