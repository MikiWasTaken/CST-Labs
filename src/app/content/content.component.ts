import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  displayBlondeHair: boolean = false;
  displayRedApron: boolean = false;
  displayGreenTshirt:boolean = false;
  displayParagraph: boolean = true;
  myArray = [1, 2, 3]

  changeHairColor()
  {
    this.displayBlondeHair = !this.displayBlondeHair
  }

  changeApronColor()
  {
    this.displayRedApron = !this.displayRedApron
  }

  toggleParagraphDisplay()
  {
    this.displayParagraph = !this.displayParagraph
  }
}
