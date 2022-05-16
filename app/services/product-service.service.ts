import { Injectable} from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  ProductList:IProduct[]=[];
  constructor(private http:HttpClient) { 
    this.ProductList=[
      {
        ID:1, 
        Name:"skirt",
        Quantity:1,
        Price:100,
        Img:"img"
      },
      {
        ID:2, 
        Name:"t-shirt",
        Quantity:1,
        Price:100,
        Img:"img"
      }
    ];
  }

  GetAllProducts(){
    return this.ProductList;
  }
  // GetProductById(prdId:number){
  //   for(var i=0; i<this.ProductList.length; i++){
  //     if(this.ProductList[i].ID == prdId)
  //       return this.ProductList[i];
  //   }
  //       return null;
  // }
}
