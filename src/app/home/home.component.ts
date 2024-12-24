import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';
import { ApiService } from '../api.service';
import { SinglePageComponent } from '../single-page/single-page.component';

@Component({
  selector: 'app-home',
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private api:ApiService){

  }
sukunan:any
  ngOnInit(){
      this.api.getProducts().subscribe((res:any)=>{
        this.sukunan=res.products;
        console.log(this.sukunan)
      });
  }

}


