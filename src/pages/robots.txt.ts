import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

export const GET: APIRoute = ({ site }) => {
  const sitemapPath = withBase('/sitemap-index.xml');
  const sitemap = site ? new URL(sitemapPath, site).href : sitemapPath;

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemap}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
