import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ICategory } from '../Shared Classes and types/ICategory';
import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  storeName:string="Eman's store";
  imageSrc = 'assets/store.png'  
  imageAlt = 'image'
  Discount:DiscountOffers=DiscountOffers.offerTwo;
  ProductList:IProduct[]=[
    {
      ID:1, 
      Name:"bag",
      Quantity:1,
      Price:100,
      Img:"img"
    },
    {
      ID:2, 
      Name:"bag",
      Quantity:1,
      Price:100,
      Img:"img"
    }
  ];
  CategoryList:ICategory[]=[{
    ID:1, 
    Name:"women"
  },
  {
    ID:2, 
    Name:"men"
  },
  {
    ID:3, 
    Name:"kids"
  }
];

  selected = "----";
  update(e:any){
    this.selected = e.target.value
  }
  ClientName:string="";
  nameOfClient="Kholoud Ahmed Ibrahiem";
  IsPurshased:boolean=false;
  // myvar:boolean=false;
  flag:boolean=true;
  headers = ["ID", "Name", "Quantity", "Price", "Image"];
  items = [
    {"name": "dress", "price":"200" , "Quantity":"100"},
    {"name": "skirt", "price":"200" ,"Quantity":"300"},
    {"name": "t-shirt", "price":"300" , "Quantity":"400"},
    {"name": "trousers", "price":"300" , "Quantity":"500"},
    {"name": "mini-skirt", "price":"300" , "Quantity":"600"},
    {"name": "shirts", "price":"300" , "Quantity":"700"},
  ]
  BtnClicked(){
    
    this.flag = !this.flag;
  }


  

  constructor(private productService :ProductServiceService) { }
  renderValues(){
    this.ProductList = this.productService.GetAllProducts();
    this.flag=!this.flag;
  }
  ngOnInit(): void {
  }

}
