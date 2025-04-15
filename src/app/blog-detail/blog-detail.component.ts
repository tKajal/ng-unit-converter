import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule,
    RouterModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog: any;

  blogs = [
    {
      id: 1,
      title: 'Why Use REM over PX in Modern Web Design?',
      date: 'April 12, 2025',
      author: 'John Developer',
      content: [
        'REM units are scalable and relative to the root font size, which helps with accessibility and consistency across devices.',
        'Unlike PX, REM adjusts based on user settings, making designs more adaptable.',
        'Using REM also improves maintainability when working with responsive typography or spacing.'
      ]
    },
    {
      id: 2,
      title: 'Why Use EM over PX in Modern Web Design?',
      date: 'April 12, 2025',
      author: 'John Developer',
      content: [
        'REM units are scalable and relative to the root font size, which helps with accessibility and consistency across devices.',
        'Unlike PX, REM adjusts based on user settings, making designs more adaptable.',
        'Using REM also improves maintainability when working with responsive typography or spacing.'
      ]
    },
    {
      id: 3,
      title: 'Why Use Percentage over PX in Modern Web Design?',
      date: 'April 12, 2025',
      author: 'John Developer',
      content: [
        'REM units are scalable and relative to the root font size, which helps with accessibility and consistency across devices.',
        'Unlike PX, REM adjusts based on user settings, making designs more adaptable.',
        'Using REM also improves maintainability when working with responsive typography or spacing.'
      ]
    },
    // Add more blog objects here...
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    this.blog = this.blogs.find(b => b.id === id);

    if (!this.blog) {
      this.router.navigate(['/blog']);
    }
  }
}
