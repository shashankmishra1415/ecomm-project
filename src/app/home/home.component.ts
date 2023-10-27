import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { Input } from '@angular/core';
import { map, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @Input() seconds = 5000;
  timeRemaining$ = timer(0, 1000).pipe(
    map(n => (this.seconds - n) * 1000),
    takeWhile(n => n >= 0),
  );
  
popularProducts:undefined|product[];
trendyProducts:undefined|product[];

  constructor(private product:ProductService){}

  ngOnInit(): void {
   this.product.popularProducts().subscribe((data)=>{
   this.popularProducts=data;
   })

   this.product.trendyProducts().subscribe((data)=>{
    this.trendyProducts=data;
    })
  }

}
