import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
 isDarkMode = false;

  ngOnInit(): void {
    const theme = localStorage.getItem('theme') || 'dark';
    this.isDarkMode = theme === 'dark';
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  toggleTheme(event: any) {
    this.isDarkMode = event.target.checked;
    const newTheme = this.isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
}
