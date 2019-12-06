import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ProduitsService} from './../produits.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ajouterproduit',
  templateUrl: './ajouterproduit.component.html',
  styleUrls: ['./ajouterproduit.component.css']
})
export class AjouterproduitComponent implements OnInit {

  prod=[];
  id: number;
  libelle:string;
  lib:string;
  sup:number;
  prix:number;
  id1:number;
   nom1:string;
   lib1:string;
   prix1:number;
  addpro(){
    if (this.service.addProduit(this.id,this.libelle,this.lib,this.prix))
    {
      alert("L'accessoire est ajouté");
    } else {
      alert("L'accessoire existe déja");
    }
  }
  supprimer()
  {
    if(this.service.getProduitByID(this.id)==null){

   
    this.service.supprime(this.sup);
    }
  }
  constructor(private service:ProduitsService,private router:Router) { }

  ngOnInit() 
  {
this.prod=this.service.products;
  }
  modif1(){
    if(this.service.getProduitByID(this.id1)==null)
    {
      alert("l'accessoire n'existe pas");
    }
    else{
      this.service.modifnom(this.id1,this.nom1);
      alert("le nom d'accessoire' est modifié ");
    }
  }
  modif2(){
    if(this.service.getProduitByID(this.id1)==null)
    {
      alert("l'accessoire n'existe pas");
    }
    else{
      this.service.modifimg(this.id1,this.lib1);
      alert("l'image d'accessoire est modifié ");
    }
  }
  modif3(){
    if(this.service.getProduitByID(this.id1)==null)
    {
      alert("l'accessoire n'existe pas");
    }
    else{
      this.service.modifprix(this.id1,this.prix1);
      alert("le prix d'accessoire est modifié ");
    }
  }

}
