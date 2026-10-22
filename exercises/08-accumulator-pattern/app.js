/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
   A[Inicio] --> B[total = 0]
    B --> C{¿Más artículos?}
    C -->|Sí| D[Leer precio]
    D --> E[total = total + precio]
    E --> C
    C -->|No| F[Mostrar total]
    F --> G[Fin]
`;

module.exports = answer.trim();