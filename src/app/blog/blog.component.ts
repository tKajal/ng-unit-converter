import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogs = [
    {
      id: 1,
      title: 'Why Use REM over PX in Modern Web Design?',
      date: 'April 12, 2025',
      excerpt: 'Learn why REM units are better for accessibility and responsive design in modern websites.'
    },
    {
      id: 2,
      title: 'Understanding EM vs REM – Which One to Use?',
      date: 'April 10, 2025',
      excerpt: 'A deep dive into how EM and REM behave differently and how to choose the right one for layout scaling.'
    },
    {
      id: 3,
      title: 'Converting PX to Percent: A Practical Guide',
      date: 'April 8, 2025',
      excerpt: 'Explore use cases for percentage units in CSS and how to convert them from pixel-based layouts.'
    }
  ];
}
