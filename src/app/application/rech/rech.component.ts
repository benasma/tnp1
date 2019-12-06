import { Component, OnInit } from '@angular/core';
import { Produit } from '../Produit';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-rech',
  templateUrl: './rech.component.html',
  styleUrls: ['./rech.component.css']
})
export class RechComponent implements OnInit {
  products:Produit[];
  libelle:string;
  idd:number;
  hid:string;
  idNom: string;
  prod={
    id: 0 ,
    libelle:'',
    lib:'',
    prix:0,
  };

  constructor(private ProduitsService:ProduitsService) { }

  ngOnInit() 
  {
this.products=this.ProduitsService.products;
  }

 /* estvide(){
    if(this.libelle.valid==true && this.idd.$valid)
    return false;
    else
    return true;
  }
  */

cherch(){
console.log(this.prod)
  for(let i=0;i<this.products.length;i++)
  {
    if((this.products[i].libelle.search(this.idNom) == -1) &&  (this.products[i].id.toString().search(this.idNom) == -1))
    {
      
      console.log(this.products[i])
    }
    else{
      this.prod=this.products[i];
    }
  }

}


}
