import { Component, OnInit } from '@angular/core';

import { Produit } from '../Produit';
import { ProduitsService } from '../produits.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  lesProduits : any;
  lib1:string;
 

  array: any[] = [{ name: 'John'} , { name: 'Mary' }, { name: 'Adam' }];
  order: string = 'prix';
  rechercher(){
      this.produitsService.rech(this.lib1);
  }
  constructor(private produitsService:ProduitsService) { }
 
  ngOnInit() {
    this.lesProduits = this.produitsService.products;
    
  }
  
 

}
