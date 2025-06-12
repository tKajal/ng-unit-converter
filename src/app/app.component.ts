import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ConversionTableComponent } from './conversion-table/conversion-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FormsModule, ConverterComponent, NavbarComponent, FooterComponent, ContentComponent,
     ContactComponent, HomeComponent, ConversionTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web';
}
