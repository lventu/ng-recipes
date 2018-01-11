import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentSection = 'REC';

  onSectionChanged(section: string) {
    console.log(section);
    this.currentSection = section;
  }
}
