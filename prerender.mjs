// Runs after `vite build` to inject pre-rendered HTML into dist/index.html
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// Load the server build output
const { render } = await import('./dist/server/entry-server.js');

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');
const appHtml = render();

// Inject pre-rendered HTML into the template
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

fs.writeFileSync(toAbsolute('dist/client/index.html'), html);
console.log('Pre-render complete: dist/client/index.html');
