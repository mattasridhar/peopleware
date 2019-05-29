import { Component, 
         OnInit }             from '@angular/core';
import { AppService }         from './app.service';
import { Router }             from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent implements OnInit {

  title = 'PEOPLE-WARE: Recruiting Application';
  private show: Boolean = true;

  constructor(private appService: AppService,
    private router: Router) {
    this.show = true;
  }

  ngOnInit(): void {
    console.log("\n ********************** \n * UI has Initialized * \n **********************\n\n");
  }

}
