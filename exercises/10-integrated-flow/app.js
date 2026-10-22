/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[Inicio] --> B[Seleccionar producto]
    B --> C{¿Selección válida?}
    C -->|No| D[Mostrar error]
    D --> B
    C -->|Sí| E[Insertar dinero]
    E --> F{¿Dinero suficiente?}
    F -->|No| G[Insertar más dinero]
    G --> F
    F -->|Sí| H[Entregar producto]
    H --> I[Devolver el cambio]
    I --> J[Fin]
`;

module.exports = answer.trim();