# PlacaConsultor

Este es un simple crud, donde se busca la información de una placa vehicular y se obtiene un reporte de este en formato PDF.
Se tiene 2 versiones, 1 que es el crud normal. Y otra con la implementacion de keycloak que mejora la seguridad de usuarios, como también añade un SSO en varias aplicaciones.

- Demo Normal [aquí](https://consulta-de-matriculas.netlify.app/)
- Demo Keycloak [aquí](https://placasa-keycloak.netlify.app/) (user: ggrenz  password: qwerty1234)

Requerimientos:
- Angular: version 20.1.3.

# Pasos:
1. ir a la carpeta raíz y abrir consola
2. ejecutar 
```bash
npm i
```
3. Este front requiere del backend:
   Hay 4 versiones subidas:
   - Java: [placas-crud-back](https://github.com/renz-ayala/placas-crud-back)
   - C#: [placas-net-back](https://github.com/renz-ayala/placas-net-back)
   - Typescript: [placas-js-back](https://github.com/renz-ayala/placas-js-back)
   - Python: [placas-py-back](https://github.com/renz-ayala/placas-py-back)

### Generic readme by angular.
## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
