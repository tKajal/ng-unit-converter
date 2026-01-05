import 'zone.js/node';

import express from 'express';
import { join } from 'path';
import { CommonEngine } from '@angular/ssr';
import { APP_BASE_HREF } from '@angular/common';
import bootstrap from './src/main.server';

export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/web/browser');
  const engine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  server.get('*', async (req, res) => {
    const html = await engine.render({
      bootstrap,
      documentFilePath: join(distFolder, 'index.html'),
      url: req.originalUrl,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }]
    });

    res.send(html);
  });

  return server;
}

function run(): void {
  const port = process.env["PORT"] || 4000;
  app().listen(port, () => {
    console.log(`SSR running on http://localhost:${port}`);
  });
}

run();
