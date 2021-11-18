import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  uri = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  getAllProducts() {
    return this.http.get(this.uri + '/getAllProduct');
  }

  getProduct(fecEntrega: null, idProducto: null){
    let fec = null
    let id = null;
    if(fecEntrega !== undefined){
      fec = fecEntrega;
    }
    if(idProducto !== undefined){
      id = idProducto;
    }

    let headers = new HttpHeaders({      
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "es-ES,es;q=0.9",
      "Access-Control-Allow-Headers": "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      "Access-Control-Allow-Origin": "*"
    });

    return this.http.get(
      this.uri + '/getProduct/'+id+'/'+fec ,
      {
        headers: headers
      }
    );
  }

}
