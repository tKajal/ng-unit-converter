// Vercel Serverless function
import { AngularNodeApp } from '@angular/ssr/node';
import bootstrap from '../dist/your-app/server/main.js';

export default AngularNodeApp.bootstrap(bootstrap);
