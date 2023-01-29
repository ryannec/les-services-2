import { Component } from '@angular/core';
import { CoktailServiceService } from '../coktail-service.service';
@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {

  menuCoktail: {name: string,price: number, image:string}[] = [];

constructor(private service: CoktailServiceService){}

ngOnInit() {
this.getcoktailsFromService();

};
getcoktailsFromService(): void {
  this.service
  .getCocktails()
  .subscribe((data) => {this.menuCoktail = data})
}
}