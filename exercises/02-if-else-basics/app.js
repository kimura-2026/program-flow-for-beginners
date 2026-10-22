/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/

const answer = `
flowchart TD
    A[Inicio] --> B[Pedir edad]
    B --> C{¿Edad >= 18?}
    C -->|Sí| D[Puede beber]
    C -->|No| E[No puede beber]
    D --> F[Fin]
    E --> F
`;

// Do not modify this
module.exports = answer.trim();