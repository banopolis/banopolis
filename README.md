# Bañópolis

Demo interactiva de la app **Bañópolis** — *Tu baño, siempre cerca.*

Mockup navegable presentado dentro de un marco de iPhone. Sin APIs externas, sin funcionalidad real — solo datos de prueba para presentaciones.

## Pantallas incluidas

1. **Inicio** — Pantalla de bienvenida con logo y mascota
2. **Mapa** — Baños cercanos con pins en mapa estilizado
3. **Lista** — Listado de baños con distancia y valoración
4. **Detalle** — Información del baño seleccionado
5. **Ruta** — Navegación simulada con instrucciones
6. **Filtros** — Modal con toggles y slider de distancia
7. **Favoritos** — Baños guardados
8. **Sin internet** — Modo offline
9. **Ajustes** — Configuración de la app

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173/banopolis/](http://localhost:5173/banopolis/) en el navegador.

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub llamado `banopolis`
2. Sube este código a la rama `main`
3. Ve a **Settings → Pages → Build and deployment**
4. Selecciona **GitHub Actions** como fuente
5. Al hacer push a `main`, el workflow desplegará automáticamente

La app estará disponible en: `https://<tu-usuario>.github.io/banopolis/`

> Si tu repositorio tiene otro nombre, cambia `base` en `vite.config.js` para que coincida.

## Navegación de la demo

| Acción | Resultado |
|--------|-----------|
| COMENZAR | Abre el mapa |
| FUNCIONA SIN INTERNET | Pantalla offline |
| Menú hamburguesa (☰) | Drawer lateral con navegación |
| Tabs inferiores | Mapa / Lista / Favoritos / Ajustes |
| Tap en baño | Detalle del baño |
| VER RUTA / CÓMO LLEGAR | Pantalla de navegación |
| Icono de filtros | Modal de filtros |
| GUARDAR | Toast de confirmación |

## Stack

- React 19 + Vite 6
- CSS puro (sin librerías de UI)
- Datos mock en español
