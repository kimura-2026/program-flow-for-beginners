/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[Inicio] --> B[Bloqueado]
    B -->|Moneda| C[Desbloqueado]
    B -->|Empujar| B
    C -->|Moneda| C
    C -->|Empujar| D[La persona pasa]
    D --> B
    B -->|No hay más eventos| E[Fin]
    C -->|No hay más eventos| E
`;

module.exports = answer.trim();