/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[Inicio] --> B[Pedir contraseña]
    B --> C{¿Contraseña correcta?}
    C -->|Sí| D[Acceso concedido]
    C -->|No| E[Mostrar error]
    E --> B
    D --> F[Fin]
`;

module.exports = answer.trim();