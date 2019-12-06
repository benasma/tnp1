import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  id:number;
  lib:string;
  libelle:string;
  prix:number;
  d:string="DT";
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.lib = this.activatedRoute.snapshot.params['lib'];
    this.libelle = this.activatedRoute.snapshot.params['libelle'];
    this.prix = this.activatedRoute.snapshot.params['prix'];
  }

}
