import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BLOGS } from '../blog.data';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from '../../seo.service';

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

  constructor(private route: ActivatedRoute, private router: Router,
    private meta: Meta,
    private title: Title,
    private seo: SeoService
  ) { }

  ngOnInit(): void {

    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    this.blog = BLOGS.find(b => b.uid === id);

    if (!this.blog) {
      this.router.navigate(['/blog']);
    }

    if (this.blog) {
      this.seo.update(
        `${this.blog.title} | Responsive Units`,
        this.blog.excerpt,
        `https://responsive-units.vercel.app/blog/${this.blog.id}`
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
          "name": "Responsive Units"
        },
        "datePublished": this.blog.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://responsive-units.vercel.app/blog/${this.blog.id}`
        }
      });
    }

  }
}
