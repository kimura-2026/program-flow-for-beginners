
/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format:
    const answer = `...`;
    module.exports = answer.trim();
*/

const answer = `
flowchart TD
    C("Inicio") --> D["Hervir agua"]
    D --> E["Preparar el café"]
    E --> A["Servir el café"]
    A --> B("Fin")
`;

module.exports = answer.trim();
