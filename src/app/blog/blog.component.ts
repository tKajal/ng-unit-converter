import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BLOGS } from '../blog.data';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogs = BLOGS;
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Web Design Blog | CSS Units & Responsive Design');

    this.meta.updateTag({
      name: 'description',
      content:
        'Learn about CSS units, REM vs PX, EM vs REM, responsive layouts, and accessibility best practices.'
    });
  }
}
