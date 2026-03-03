import { projectsData } from './src/data/projectsData.js';

/**
 * Define all routes to be pre-generated as static files
 */
export const routes = [
  '/',
  '/skills',
  '/contact',
  // Dynamic project routes
  ...Object.keys(projectsData).map(projectId => `/project/${projectId}`),
];
