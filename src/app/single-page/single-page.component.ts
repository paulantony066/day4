import { Component } from '@angular/core';
import { RouterLink ,ActivatedRoute} from '@angular/router';
import { CardsComponent } from '../cards/cards.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-single-page',
  imports: [],
  templateUrl: './single-page.component.html',
  styleUrl: './single-page.component.scss'
})
export class SinglePageComponent {
  constructor(private activated: ActivatedRoute,private api:ApiService){
  
    }
    product:any;
    ngOnInit():void{
      let id = this.activated.snapshot.paramMap.get("id");

      this.api.getProductsById(id).subscribe((res: any) => {
        this.product = res;
        console.log(this.product);
        
  
      });
    }
}
