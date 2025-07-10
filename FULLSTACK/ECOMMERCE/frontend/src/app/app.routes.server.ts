import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '', // Home page
    renderMode: RenderMode.Prerender
  },
  {
    path: 'cart',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'product/:id',
    renderMode: RenderMode.Server 
  },
  {
    path: 'order/success/:id',
    renderMode: RenderMode.Server
  }
];
