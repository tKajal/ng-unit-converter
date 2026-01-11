import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BLOGS } from '../blog.data';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogs = BLOGS;
  constructor(private meta: Meta, private title: Title, private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.addJsonLd({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Responsive Units Blog",
      "url": "https://responsive-units.vercel.app/blog",
      "description": "Articles about CSS units, px to rem conversion, responsive design and accessibility."
    });


    this.title.setTitle('Web Design Blog | CSS Units & Responsive Design');

    this.meta.updateTag({
      name: 'description',
      content:
        'Learn about CSS units, REM vs PX, EM vs REM, responsive layouts, and accessibility best practices.'
    });
  }
}
