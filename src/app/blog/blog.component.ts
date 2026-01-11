import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BLOGS } from '../blog.data';
import { SeoService } from '../../seo.service';
import { SITE_NAME, SITE_URL } from '../constants/site.constants';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs = BLOGS;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update(
      'Web Design Blog – CSS Units, PX to REM, Responsive Design',
      'Learn CSS units like PX, REM, EM, %, responsive layouts and accessibility best practices.',
      `${SITE_URL}/blog`
    );

    this.seo.addJsonLd({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": `${SITE_NAME} Blog`,
      "url": `${SITE_URL}/blog`,
      "description": "Articles about CSS units, px to rem conversion, responsive design and accessibility."
    });
  }
}
