import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.isValid)
  }
  title = 'UnofficialSmallpolandKartingLeague';
  opened: boolean = false;
  isValid = screen.width < 800;
}
