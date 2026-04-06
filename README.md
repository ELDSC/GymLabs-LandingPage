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

### Configuración del Componente: Barra de Navegación (`app-navbar`)

Recientemente se aplicaron múltiples mejoras a la navegación principal para hacerla coherente con el *footer* y elevar su atractivo visual de acuerdo a nuestros estándares premium:

1. **Variables y Métodos en Español:** Se unificó el código TypeScript para que en vez de usar términos en inglés, se gestionen las variables y funciones internas en español (por ejemplo: `menuAbierto()`, `enlacesNavegacion`, `alternarMenu()`, y `cerrarMenu()`), con el fin de facilitar futuras aportaciones e integraciones por programadores latinoamericanos y para coincidir con la semántica usada en la base.
2. **Corrección Sintáctica HTML:** Aseguramos la inicialización de todos los tags `<a>` dentro del mapeo interactivo de la navegación móvil y desktop, engranando las rutas exitosamente para la SPA.
3. **Consistencia en metodologías CSS y SCSS:** Se solventó un choque de lenguajes (`navbar__icon-btn` vs `navbar__icono-btn` / `&__actions` vs `&__acciones`) utilizando siempre nuestra nomenclatura BEM en español de forma estricta.
4. **"Glassmorphism" y Marca Visual:** Se descartó el fondo sólido por uno texturizado transparente que hace uso de `backdrop-filter: blur(12px)`. Esto difumina elementos posteriores ofreciendo una ilusión óptica de cristal ahumado. De igual forma, el logo central obtuvo un efecto premium mediante el enmascaramiento de gradientes de color (`background-clip: text` y `-webkit-text-fill-color: transparent`).

---

## 📖 Diccionario Breve de Sintaxis y Patrones

Para quienes integrarán nuevos componentes a GymLabs, durante la mejora del Navbar se emplearon metodologías y funciones del marco que conviene comprender para la curva de desarrollo:

### Convenciones SASS (SCSS) y BEM

*   **El Ampersand (`&`)**: En SASS, el `&` indica una referencia directa al "selector padre". Por ejemplo, si tienes `.navbar { &__logo { ... } }`, SASS lo compila literalmente como `.navbar__logo`. Es sumamente útil para anidar código sin perder especificidad y para el tipado rápido.
*   **Doble Subguion (`__`)**: Pertenece a la metodología BEM (Bloque, Elemento, Modificador). Cuando ves `navbar__contenedor`, `navbar` es el _Bloque_ (el contenedor principal y funcional), y `contenedor` o `icono-btn` son los _Elementos_ descendientes lógicos de esa sección.
*   **Doble Guion (`--`)**: También proviene de BEM y define el _Modificador_ de ese Bloque o Elemento; es decir, altera su apariencia, estado o comportamiento. Por ejemplo, en `navbar__link--active`, la clase `--active` indica que es el enlace principal o sobre el que se encuentra el usuario en ese momento.
*   **Los pseudo-elementos (`::`)**: A diferencia de los pseudo-estados como `:hover` o `:focus`, el doble dos puntos se reserva en CSS3 para pseudo-elementos como `::after` y `::before`. Te permiten insertar elementos HTML estéticos o de transición (como una línea subrayada inferior de animación) sin necesidad de llenar tu código HTML verdadero de elementos basura o inútiles.
*   **La directiva `@include`**: Se utiliza para inyectar/embutir lo contenido dentro de un constructo lógico (mixin) elaborado en `_mixins.scss`. Si declaras `@include flex-centro;`, SASS tomará automagicamente las reglas CSS correspondientes (`display: flex`, `justify-content: center` etc.) y las unificará allí disminuyendo código repetido.

### Sintaxis Moderna de Angular

*   **Evaluador Dinámico de Clases (`[ngClass]`)**: Es una directiva de Angular que evalúa una condición TypeScript para determinar si una clase CSS se "enciende o se apaga". Al colocar `[ngClass]="{ 'is-open': menuAbierto() }"`, le informamos al framework: _"Si la señal `menuAbierto` tiene el valor `true`, adhiere la clase `.is-open` temporalmente al botón de este HTML"_.
*   **Control de Flujo Iterador (`@for`)**: Es la nueva manera (moderna a partir de Angular 17) para hacer ciclos iterativos super eficientes sobre arrays y componentes internos que antes se lograban usando el control de directiva estructural `*ngFor`. Por medio de `@for (enlace of enlacesNavegacion; track enlace.path) { ... }`, Angular construye la HTML tantas veces como existan registros de configuración, vigilando posibles mutaciones reactivas mediante su cláusula esencial `track`.

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
