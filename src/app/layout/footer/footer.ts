import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  navLinks = [
    { label: 'Tienda', path: '/tienda' },
    { label: 'Ofertas', path: '/ofertas' },
    { label: 'Categorías', path: '/categorias' },
  ];

  legalLinks = [
    { label: 'Privacidad', path: '/privacidad' },
    { label: 'Términos', path: '/terminos' },
    { label: 'Envíos', path: '/envios' },
  ];

  socialLinks = [
    { label: 'Instagram', url: 'https://github/ELDSC' },
    { label: 'YouTube', url: 'https://github/ELDSC' },
  ];
  currentYear = new Date().getFullYear(); 
}