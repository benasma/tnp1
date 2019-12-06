import { Injectable } from '@angular/core';
import { Produit } from './Produit';
//import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})

export class ProduitsService {

   //ProduitsList: AngularFireList<any>;
  products =[ 
    new Produit(15, 'accessoire1',"assets/image/ac1.PNG",100),
    new Produit(32, 'accessoire2',"assets/image/ac2.PNG",200),
    new Produit(45, 'accessoire3',"assets/image/ac3.PNG",150),
    new Produit(96, 'accessoire4',"assets/image/ac3.PNG",210)
  ]
 
  
  getProduitByID(id:number){
    for(let i of this.products){
      if (id==i.id) {return i;}
    }
    return null;
  }
  addProduit(id:number,libelle:string,lib:string,prix:number){
    if (this.getProduitByID(id)==null){
      this.products.push(new Produit(id,libelle,lib,prix));
      return true;
    }
    return false;
  }
  supprime(id:number)
  {
    if(this.getProduitByID(id)==null)
    {
        alert("le produit n'existe pas");
    }
   
    else{
      for(let i=0;i<this.products.length;i++){
        if(this.products[i].id==id){
         this.products.splice(i,1);
        }
      }
    }
  }
  
   
    rech(libelle:string){
         if(libelle=="")
         {
           alert("le nom n'existe pas dans la liste des produits");
         }
         else{
           this.products=this.products.filter(aff=>{
             return aff.libelle.toLocaleLowerCase().match(libelle.toLocaleLowerCase());
           })
         }
         
    }
   constructor() { }

   modifnom(id:number, libelle:string)
   {
    for( let i=0;i<this.products.length;i++)
  {
      if(id==this.products[i].id)
      {
        this.products[i].libelle=libelle;
      }
  }
}
modifimg(id:number, lib:string)
{
 for( let i=0;i<this.products.length;i++)
{
   if(id==this.products[i].id)
   {
     this.products[i].lib=lib;
   }
}
}
modifprix(id:number,prix1:number)
{
 for( let i=0;i<this.products.length;i++)
{
   if(id==this.products[i].id)
   {
     this.products[i].prix=prix1;
   }
}

}
  
  }


