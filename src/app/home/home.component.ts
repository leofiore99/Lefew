import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model = {};
  success = '';
  error = '';

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  sendEmail() {
    this.homeService.SendEmail(this.model)
      .subscribe((resultPosition) => {
        this.success = 'E-mail enviado com sucesso.';
        this.model = {};

        setTimeout(() => {
          this.success = '';
        }, 3000);

      }, (error) => {
        this.error = this.homeService.getError(error.status);
      });
    console.log(this.model);
  }

}
