export default function (plop) {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What's this component's name?",
      },
      {
        type: "input",
        name: "element",
        message: "HTML element (div is default)",
        default: "div",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.ts",
        templateFile: "templates/index.ts.hbs",
      },
    ],
  });
}
