import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  imageSrc = 'assets/img1.jpg'  
  imageAlt = 'image'
  ngOnInit(): void {
  }

}
