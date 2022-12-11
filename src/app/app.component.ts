import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recapitulare';
  contents = ["A", "B", "C", "D", "E", "F"]
  displayHeader : boolean = true

  changeDisplayHeader()
  {
    this.displayHeader = !this.displayHeader
  }

}
