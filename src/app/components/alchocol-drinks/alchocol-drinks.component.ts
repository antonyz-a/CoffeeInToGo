import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import alcoholDbJson from 'src/assets/drinks_db/alcoholDb.json';

@Component({
  selector: 'app-alchocol-drinks',
  templateUrl: './alchocol-drinks.component.html',
  styleUrls: ['./alchocol-drinks.component.css'],
})
export class AlchocolDrinksComponent implements OnInit {

  public panelOpenState: boolean = true;

  public sortedRums: [number];

  //*Beer
  public beer: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[0];

  //*Martini
  public martini: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[1];

  //*Digestifs
  public digestifs: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[2];

  //*Gin
  public gin: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[3];
  //*Rum
  public rum: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[4];

  //*Liquers
  public liquers: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[5];

  //*Vodka
  public vodka: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[6];

  //*Cognac
  public cognac: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[7];

  //*Brandy
  public brandy: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[8];

  //*Tequila
  public tequila: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[9];

  //*Whisky
  public whisky: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[10];

  //*Irish
  public irishWhisky: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[11];

  //*Bourbon
  public bourbonWhisky: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[12];

  //*American
  public americanWhisky: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[13];

  public spritz: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[14];

  public GinAndTonics: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[15];

  public Apetisani: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[16];

  constructor(
    public translate: TranslateService

  ) { }


  ngOnInit(): void {
    if (localStorage.length >= 1) {
      var test = localStorage.getItem("item_key");

      if (test != null) {
        this.translate.use(test.toString());
      }
    }




    this.beerPromotion();
    this.martiniPromotion();
    this.digestPromotion();
    this.ginPromotion();
    this.rumPromotion();
    this.liquerPromotion();
    this.vodkaPromotion();
    this.kognacPromotion();
    this.brendiPromotion();
    this.tequilaPromotion();
    this.whiskeyPromotion();
    this.irishPromotion();
    this.burbonPromotion();
    this.americanPromotion();
    this.spritzPromotion();
    this.ginAndTonicPromotion();
    this.apetizingPromotion();
  }

  beerPromotion(): void {
    this.beer.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.beer.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.beer.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  martiniPromotion(): void {
    this.martini.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.martini.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.martini.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  digestPromotion(): void {
    this.digestifs.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.digestifs.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.digestifs.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  ginPromotion(): void {
    this.gin.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.gin.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.gin.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  rumPromotion(): void {
    this.rum.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));
    this.rum.forEach((element) => {

      if (element.promotionPrice) {

        element.id = -1;
        element.id++;
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.rum.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;

      }


      // this.rum.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    });


  }

  liquerPromotion(): void {
    this.liquers.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.liquers.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.liquers.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  vodkaPromotion(): void {
    this.vodka.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.vodka.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.vodka.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  kognacPromotion(): void {
    this.cognac.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.cognac.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.cognac.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  brendiPromotion(): void {
    this.brandy.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.brandy.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.brandy.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  tequilaPromotion(): void {
    this.tequila.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.tequila.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.tequila.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  whiskeyPromotion(): void {
    this.whisky.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.whisky.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.whisky.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  irishPromotion(): void {
    this.irishWhisky.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.irishWhisky.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.irishWhisky.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  burbonPromotion(): void {
    this.bourbonWhisky.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.bourbonWhisky.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.bourbonWhisky.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  americanPromotion(): void {
    this.americanWhisky.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.americanWhisky.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.americanWhisky.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });

  }

  spritzPromotion(): void {
    this.spritz.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.spritz.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.spritz.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });
  }

  ginAndTonicPromotion(): void {
    this.GinAndTonics.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.GinAndTonics.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.GinAndTonics.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });
  }

  apetizingPromotion(): void {
    this.Apetisani.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

    this.Apetisani.forEach((element) => {
      if (element.promotionPrice) {
        let originalPrice = element.price;
        element.price = "0ден."

        // this.rum.sort((a, b) => a.id - b.id);

        this.Apetisani.sort((a, b) => parseInt(a.price.split("д")[0]) - parseInt(b.price.split("д")[0]));

        element.price = originalPrice;
      }
    });
  }
}
