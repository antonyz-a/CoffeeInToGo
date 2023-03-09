import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'coffeein-to-go';

  constructor(
    public router: Router,
    public cdr: ChangeDetectorRef,
    public translate: TranslateService
    ) {}

  test:boolean = false;
  event:any;


  btnClick(event: any) {
    this.test = !this.test;

    if(this.test) {
      this.router.navigateByUrl('/app-coffee');
      console.log(event);
    }
    else if (!this.test) {
      this.router.navigateByUrl('/home');
    }

  }


  ngOnInit(): void {
    this.cdr.detectChanges();
  }
}
