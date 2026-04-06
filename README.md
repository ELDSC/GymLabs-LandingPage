# GymLabs - Landing Page

Bienvenido al repositorio de la Landing Page de **GymLabs**, una aplicación construida con un stack moderno en Angular. Este proyecto ha sido recientemente reestructurado y estilizado siguiendo especificaciones de diseño premium (espectro Slate y Emerald del esquema visual).

## 🎨 Sistema de Diseño (Carpeta `src/styles`)

El corazón visual de la aplicación se encuentra centralizado en una arquitectura SASS modular. Esto nos permite mantener el código ordenado, altamente mantenible y responsivo a cualquier resolución de pantalla.

### Estructura de Archivos SASS

- **`_variables.scss`**: Contiene la **Paleta de Colores** premium de GymLabs. Destruye los predeterminados con el fondo oscuro `$bg-base` (Slate 950), resalta los accesos con `$color-primary` (Emerald 500) y marca alarmas u ofertas de precio con `$color-danger` (Red 500). También define variables para el novedoso Glassmorphism del layout.
- **`_typography.scss`**: Maneja la fuente moderna **Manrope**, define los tamaños mediante rem, al igual que los valores del border-radius (`$radius-2xl` para tarjetas y grandes objetos).
- **`_mixins.scss`**: Herramientas rápidas y reutilizables escritas con clases en _Español_. Contiene mixins clave como `@include responsivo($breakpoint)` para manejar el layout de móviles/tablets, `@include flex-centro`, y `@include btn-primario`.
- **`_animations.scss`**: Define los cortes universales de resolución (`$bp-sm`, `$bp-md`), índices de profundidad _Z-index_ y las sombras brillantes estilo Neón/Glow (`$shadow-primary` de color verde Esmeralda difuso).
- **`_reset.scss`**: Restaura los márgenes por defecto del navegador web para asegurar que nuestra tipografía, colores del `body` primario y transiciones limpias ocupen el 100% de la experiencia visual.

### ¿Cómo usar el Sistema de Diseño?

Debido al estándar moderno de Angular en conjunción con SCSS, empleamos directivas **`@use`** (dejando atrás las viejas `@import`). Para que los estilos funcionen en tus nuevos sub-componentes, debes indicar estas dependencias locales al tope de tu archivo de estilos de la siguiente manera:

```scss
@use '../../../styles/variables' as *;
@use '../../../styles/mixins' as *;

.mi-nuevo-componente {
  background-color: $bg-surface; // Aplica los fondos Slate directamente
  color: $text-secondary;

  // Utiliza el mixin en español para modificar su comportamiento en un celular
  @include responsivo(md) {
    flex-direction: column;
  }
}
```

---

## 🏗️ Configuración y Layout Principal

El esqueleto de la aplicación consiste en rutas definidas localizadas en `app.routes.ts`, apoyado en un marco central llamado `app-main-layout` y complementado por secciones modulares como la Navegación y el Footer.

### Configuración del Componente: Pie de Página (`app-footer`)

Se documenta la última intervención al área del pie de página que incluye una migración estructural:

1. **Clases al Español (BEM):** La estructura del HTML y SCSS se unificaron usando la metodología BEM (Block, Element, Modifier) en castellano: `.footer__contenedor`, `.footer__marca`, `.footer__eslogan`, `.footer__enlace`.
2. **Angular SPA Routing:** Se mapearon los enlaces dinámicos con flujos iteradores modernos de Angular (`@for`). Al recorrer perfiles y rutas de la tienda en `footer.ts`, se hace el redireccionamiento veloz mediante el atributo `[routerLink]`.
3. **Resolución Fix NG0955:** Al renderizar duplicados como en el panel de enlaces a redes solciales, la aplicación usa el rastro o _track_ por defecto de Angular anclado de forma lógica al `label` en lugar de la `URL`.
4. **Respeto e inyección de Grillas (`display: grid`):** Para asegurar que los componentes de Angular como _custom HTML elements_ no restrinjan el diseño, se añadió en los estilos una propiedad inyectada: `:host { display: block; width: 100%; }`. Esto garantiza que nuestro Layout principal no termine _apilando responsivamente_ columnas de escritorio a menos de que detecte los márgenes apropiados del `$bp-[tamaño]`.

---

## 🚀 Corriendo la Aplicación Localmente

1. Descarga/Clona el proyecto o instala las librerías base por primera vez con:
   ```bash
   npm install
   ```
2. Inicializa el servidor de desarrollo local de Angular mediante el CLI:
   ```bash
   ng serve
   ```
3. Visita desde tu navegador la dirección mágica: `http://localhost:4200/`.
4. ¡El proyecto aplicará recargas en caliente! Ante cada modificación y guardado que hagas en tus hojas de estilo, archivos `.ts` o tu diseño HTML, tus resultados quedarán documentados in-situ.
