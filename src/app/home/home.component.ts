import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { ConverterComponent } from '../converter/converter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, ContentComponent, ConverterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
