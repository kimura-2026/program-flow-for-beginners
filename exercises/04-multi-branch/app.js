/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[Inicio] --> B[Leer color de la luz]
    B --> C{¿Color de la luz?}
    C -->|Verde| D[Avanzar]
    C -->|Amarillo| E[Reducir la velocidad]
    C -->|Rojo| F[Detenerse]
    D --> G[Continuar]
    E --> G
    F --> G
    G --> H[Fin]
`;

// Do not modify this
module.exports = answer.trim();