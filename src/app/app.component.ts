import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Any = jasmine.Any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myFirstApp';
}

var ado: String
ado = "Purple City Bird Gang"

var haze: String
haze = "Need the sour with this"
