# Frontend con Material-UI, Next.js y Axios

En el frontend de este proyecto, se ha utilizado Next.js, Material-UI y Axios para crear una interfaz de usuario atractiva y eficiente. Destacan las siguientes características:

- **Next.js:** Facilita el enrutamiento y la carga rápida de páginas.

- **Material-UI:** Proporciona un diseño moderno y componentes predefinidos.

- **Axios:** Se integra para consultas al backend de forma eficiente.

Funcionalidades clave:

- **Diseño Responsivo:** Utiliza Material-UI para garantizar la adaptabilidad a diferentes dispositivos.

- **Filtro por Especie:** Permite a los usuarios filtrar personajes por "Humanos" o "Aliens" para una mejor exploración de datos.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Api Connection
- src/contants/constants
```javascript
  export const  API_BASE_URL: string = 'http://localhost:8080/api';
```
