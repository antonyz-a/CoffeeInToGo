import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  test: boolean = false;
  element = document.body;
  // localStorLanguage: string;
  // userLastedLang: string;
  public year = new Date().getFullYear();

  constructor(
    public router: Router,
    public translate: TranslateService
    ) {
      translate.addLangs(['en', 'mk']);
      translate.setDefaultLang('en');
    }

  ngOnInit(): void {
    this.test = true;

    if(localStorage.length >= 1) {
      var test = localStorage.getItem("item_key");

      if(test != null) {
      this.translate.use(test.toString());
      }
    }



  }

  switchLanguage(lang: string) {
    this.translate.use(lang);

    localStorage.setItem("item_key",lang);
  }
}
