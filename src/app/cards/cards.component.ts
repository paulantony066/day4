import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SinglePageComponent } from '../single-page/single-page.component';

@Component({
  selector: 'app-cards',
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  @Input() data:any
}
