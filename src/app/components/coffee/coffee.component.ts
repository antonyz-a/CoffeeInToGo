import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import coffeeDbJson from 'src/assets/drinks_db/coffeeDb.json';
import coffeeWithMilkDbJson from 'src/assets/drinks_db/coffeeWithMilkDb.json';
import drinksWithoutCoffeinDbJson from 'src/assets/drinks_db/drinksWithoutCoffeinDb.json';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss'],
})
export class CoffeeComponent implements OnInit {
  public coffeeBool: boolean = false;
  public cocktailBool: boolean = false;
  public promotionPriceBool: boolean = false;
  toggleCoffee: boolean = false;
  toggleCoffeeWithMilk: boolean = false;
  toggleDrinksWithoutCoffein: boolean = false;
  nineOclock: boolean = false;

  public today: Date = new Date();
  public element = document.body;

  //Coffee
  public coffee: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = coffeeDbJson;

  //Coffee With Milk
  public coffeeWithMilk: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = coffeeWithMilkDbJson;

  //Drinks Without Coffein
  public drinksWithoutCoffein: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = drinksWithoutCoffeinDbJson;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    if (localStorage.length >= 1) {
      var test = localStorage.getItem('item_key');

      if (test != null) {
        this.translate.use(test.toString());
      }
    }

    //Coffee
    this.coffee.sort(
      (a, b) =>
        parseInt(a.price.split('д')[0]) - parseInt(b.price.split('д')[0])
    );
    this.coffee.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = '0ден.';

        this.coffee.sort(
          (a, b) =>
            parseInt(a.price.split('д')[0]) - parseInt(b.price.split('д')[0])
        );

        element.price = originalPrice;
      }
    });

    //Coffee With Milk
    this.coffeeWithMilk.sort(
      (a, b) =>
        parseInt(a.price.split('д')[0]) - parseInt(b.price.split('д')[0])
    );
    this.coffeeWithMilk.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = '0ден.';

        this.coffeeWithMilk.sort(
          (a, b) =>
            parseInt(a.price.split('д')[0]) - parseInt(b.price.split('д')[0])
        );

        element.price = originalPrice;
      }
    });

    //Drinks Without Coffein
    this.drinksWithoutCoffein.sort(
      (a, b) =>
        parseInt(a.price.split('д')[0]) - parseInt(b.price.split('д')[0])
    );
    this.drinksWithoutCoffein.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = '0ден.';

        this.drinksWithoutCoffein.sort(
          (a, b) =>
            parseInt(a.price.split('д')[0]) - parseInt(b.price.split('д')[0])
        );

        element.price = originalPrice;
      }
    });

    // this.today.setDate(this.today.getDate() + 5);
    // this.today.setHours(22, 0, 0);

    //Weekend Agenda
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;

    const fifth = first + 4;
    const friday = new Date(today.setDate(fifth));

    const sixth = first + 5;
    const saturday = new Date();


    const seventh = today;
    const sunday = new Date();
    sunday.setDate(this.today.getDate() + 1);

    // const eight = first - 1;
    const secondSunday = new Date();

    //Weekend logic
    if (this.today.getDate() === friday.getDate()) {
      friday.setHours(21, 0, 0);
      saturday.setDate(saturday.getDate() + 1);
      saturday.setHours(5, 0, 0);

      if (this.today > friday && this.today < saturday) {
        this.cocktailBool = true;
      } else {
        this.cocktailBool = false;
      }
    } else if (this.today.getDay() === 6) {
      if (this.today.getHours() > 4) {
        saturday.setHours(21, 0, 0);
        sunday.setHours(5, 0, 0);
      } else {
        this.cocktailBool = true;
        return;
      }

      if (this.today > saturday && this.today < sunday) {
        this.cocktailBool = true;
      } else {
        this.cocktailBool = false;
      }
    } else if (this.today.getDate() === secondSunday.getDate()) {
      if (this.today.getHours() > 4) {
        secondSunday.setHours(5, 0, 0);
      } else {
        this.cocktailBool = true;
        return;
      }

      if (this.today < secondSunday) {
        this.cocktailBool = true;
      } else {
        this.cocktailBool = false;
      }
    } else {
      this.cocktailBool = false;
    }

    // this.cocktailBool = false;
  }
}
