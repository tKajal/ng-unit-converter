import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BLOGS } from '../blog.data';
import { SeoService } from '../../seo.service';
import { SITE_NAME, SITE_URL } from '../constants/site.constants';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = BLOGS.find(b => b.uid === id);

    if (!this.blog) {
      this.router.navigate(['/blog']);
      return;
    }

    const blogUrl = `${SITE_URL}/blog/${this.blog.id}`;

    this.seo.update(
      `${this.blog.title} | ${SITE_NAME}`,
      this.blog.excerpt,
      blogUrl
    );

    this.seo.addJsonLd({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": this.blog.title,
      "description": this.blog.excerpt,
      "author": {
        "@type": "Person",
        "name": "Kajal Thakur"
      },
      "publisher": {
        "@type": "Organization",
        "name": SITE_NAME,
        "url": SITE_URL
      },
      "datePublished": this.blog.date,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": blogUrl
      }
    });
  }
}
