import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BLOGS } from '../blog.data';
import { Meta, Title } from '@angular/platform-browser';

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
    private title: Title
  ) { }

  ngOnInit(): void {

    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    this.blog = BLOGS.find(b => b.uid === id);

    if (!this.blog) {
      this.router.navigate(['/blog']);
    }

    if (this.blog) {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: this.blog.title,
        datePublished: this.blog.date,
        author: {
          '@type': 'Person',
          name: this.blog.author
        },
        description: this.blog.excerpt
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      this.title.setTitle(`${this.blog.title} | Responsive Units`);

      this.meta.updateTag({
        name: 'description',
        content: this.blog.excerpt
      });

      this.meta.updateTag({
        name: 'keywords',
        content:
          'CSS units, REM vs PX, EM vs REM, responsive design, web accessibility'
      });
    }

  }
}
