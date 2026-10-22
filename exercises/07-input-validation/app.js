/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[Inicio] --> B[Pedir email]
    B --> C{¿Email válido?}
    C -->|Sí| D[Continuar el registro]
    C -->|No| E[Mostrar error: email inválido]
    E --> B
    D --> F[Fin]
`;

module.exports = answer.trim();