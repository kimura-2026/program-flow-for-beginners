/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[Inicio] --> B[i = 1]
    B --> C{¿i <= 5?}
    C -->|Sí| D[Calificar tarea i]
    D --> E[i = i + 1]
    E --> C
    C -->|No| F[Mostrar resumen]
    F --> G[Fin]
`;

module.exports = answer.trim();