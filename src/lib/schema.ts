import { URL } from 'node:url';
import { SITE, FOUNDER } from './site';
import { withBase } from './paths';

type Site = URL | undefined;

function abs(site: Site, path: string): string {
  const withBasePath = withBase(path);
  return site ? new URL(withBasePath, site).href : withBasePath;
}

/**
 * Penghou is modelled as a project / site / software ecosystem created and
 * maintained by one person. There is no distinct organisation or company
 * identity, so no Organization entity is asserted. The personal GitHub account
 * is used only as a Person identifier, never as an organisation.
 */
export function personNode(site: Site) {
  const sameAs = [FOUNDER.github, FOUNDER.linkedin].filter(
    (value): value is string => Boolean(value)
  );
  return {
    '@type': 'Person',
    '@id': abs(site, '/about/#person'),
    name: FOUNDER.name,
    jobTitle: 'Founder and principal engineer',
    description: FOUNDER.bio,
    url: abs(site, '/about/'),
    sameAs,
  };
}

export function websiteNode(site: Site) {
  return {
    '@type': 'WebSite',
    '@id': abs(site, '/#website'),
    name: SITE.name,
    url: abs(site, '/'),
    description: SITE.description,
    inLanguage: 'en',
    author: { '@id': abs(site, '/about/#person') },
    creator: { '@id': abs(site, '/about/#person') },
  };
}

export function profilePageNode(site: Site) {
  return {
    '@type': 'ProfilePage',
    '@id': abs(site, '/about/#profilepage'),
    url: abs(site, '/about/'),
    name: `${FOUNDER.name} — ${SITE.name}`,
    mainEntity: { '@id': abs(site, '/about/#person') },
  };
}

export interface ProjectSchemaInput {
  name: string;
  tagline: string;
  summary: string;
  repository?: string;
  version?: string;
  path: string;
}

export function softwareSourceCodeNode(site: Site, project: ProjectSchemaInput) {
  return {
    '@type': 'SoftwareSourceCode',
    '@id': abs(site, `${project.path}#software`),
    name: project.name,
    description: project.summary,
    url: abs(site, project.path),
    codeRepository: project.repository,
    programmingLanguage: 'C#',
    ...(project.version ? { version: project.version } : {}),
    author: { '@id': abs(site, '/about/#person') },
    creator: { '@id': abs(site, '/about/#person') },
  };
}

export interface BlogPostSchemaInput {
  title: string;
  description: string;
  date: Date;
  updated?: Date;
  path: string;
}

export function blogPostingNode(site: Site, entry: BlogPostSchemaInput) {
  return {
    '@type': 'BlogPosting',
    '@id': abs(site, `${entry.path}#article`),
    headline: entry.title,
    description: entry.description,
    datePublished: entry.date.toISOString(),
    dateModified: (entry.updated ?? entry.date).toISOString(),
    url: abs(site, entry.path),
    mainEntityOfPage: abs(site, entry.path),
    author: { '@id': abs(site, '/about/#person') },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbNode(site: Site, items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: abs(site, item.path),
    })),
  };
}

export function graph(nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
