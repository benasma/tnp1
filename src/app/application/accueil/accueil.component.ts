import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
   passAsma:string;
   emailAsma:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  admin(auth:string,mdp:string)
{
  if(this.emailAsma != "asma" || this.passAsma != "asma")
  this.router.navigate(['/error']) ;
  else
  this.router.navigate(['/ajouterproduit']);

}

}
