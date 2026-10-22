/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[Inicio] --> B[Pedir edad]
    B --> C{¿Edad >= 21?}
    C -->|Sí| D{¿Licencia válida?}
    C -->|No| F[Rechazar: no hay alquiler]
    D -->|Sí| E[Alquilar el auto]
    D -->|No| F
    E --> G[Fin]
    F --> G
`;

// Do not modify this
module.exports = answer.trim();