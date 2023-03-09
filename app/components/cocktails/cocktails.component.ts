import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import cocktailsDbJson from 'src/assets/drinks_db/cocktailsDb.json';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css'],
})
export class CocktailsComponent implements OnInit {
  public cocktails: {
    id: number;
    name: string;
    price: string;
    description?: string | undefined;
    promotionPrice?: string | undefined;
  }[] = cocktailsDbJson[0];


  public classicCocktails: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = cocktailsDbJson[1];

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    if (localStorage.length >= 1) {
      var test = localStorage.getItem('item_key');

      if (test != null) {
        this.translate.use(test.toString());
      }
    }

    this.cocktails.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));
    this.cocktails.forEach((element) => {

      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        this.cocktails.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });



    this.classicCocktails.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));
    this.classicCocktails.forEach((element) => {

      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        this.classicCocktails.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });


  }
}
