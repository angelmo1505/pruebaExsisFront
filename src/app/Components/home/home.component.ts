import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from 'src/app/Services/productos-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fecEntrega: any;
  idProducto: any;
  productos: any;

  constructor(
    public productService: ProductosServiceService
  ) {
    this.consultarTodo();
   }

  ngOnInit(): void {
  }

  consultarTodo(){
    this.productService.getAllProducts().subscribe( 
      data => {
        console.log('ConsultaTodo => ', data);
        this.productos = data;
      }
    );
  }

  consultar(){
   
    this.productService.getProduct(this.fecEntrega, this.idProducto).subscribe( 
      data => {
        this.productos = "";
        console.log("data => ", data);
        this.productos = data;
      }
    );
  }

  limpiar(){
    this.fecEntrega = "";
    this.idProducto = "";
    this.consultarTodo();
  }

}
