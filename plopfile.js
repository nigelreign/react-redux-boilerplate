module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Scaffold a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/component/index.js.hbs',
      },
    ],
  });

  plop.setGenerator('container', {
    description: 'Scaffold a container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the container name:',
      },
      {
        type: 'input',
        name: 'storeName',
        message: 'Enter the store name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/containers/{{pascalCase name}}/tests/index.test.js',
        templateFile: 'plop-templates/container/tests/index.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/containers/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/container/index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/containers/{{pascalCase name}}/routines.js',
        templateFile: 'plop-templates/container/routines.js.hbs',
      },
      {
        type: 'add',
        path: 'src/containers/{{pascalCase name}}/reducer.js',
        templateFile: 'plop-templates/container/reducer.js.hbs',
      },
      {
        type: 'add',
        path: 'src/containers/{{pascalCase name}}/saga.js',
        templateFile: 'plop-templates/container/saga.js.hbs',
      },
      {
        type: 'modify',
        path: 'src/store/reducerRegistry.js',
        pattern: /(\/\* PLOP-PLACEHOLDER-REDUCER-IMPORT \*\/)/gi,
        template:
          "import {{camelCase name}} from 'containers/{{ pascalCase name}}/reducer';\n$1",
      },
      {
        type: 'modify',
        path: 'src/store/reducerRegistry.js',
        pattern: /(\/\* PLOP-PLACEHOLDER-REDUCER-INJECT \*\/)/gi,
        template: '{{camelCase storeName}}: {{camelCase name}},\n\t\t$1',
      },
      {
        type: 'modify',
        path: 'src/store/sagaRegistry.js',
        pattern: /(\/\* PLOP-PLACEHOLDER-SAGA-IMPORT \*\/)/gi,
        template:
          "import {{camelCase name}}Saga from 'containers/{{ pascalCase name}}/saga';\n$1",
      },
      {
        type: 'modify',
        path: 'src/store/sagaRegistry.js',
        pattern: /(\/\* PLOP-PLACEHOLDER-SAGA-NAME \*\/)/gi,
        template: '{{camelCase storeName}}Saga,\n\t\t$1',
      },
    ],
  });

  plop.setGenerator('route', {
    description: 'Scaffold a route',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the route name:',
      },
      {
        type: 'input',
        name: 'displayText',
        message: 'Enter the display text:',
      },
      {
        type: 'input',
        name: 'pathName',
        message: 'Enter the route name:',
      },
      {
        type: 'input',
        name: 'icon',
        message: 'Enter the icon name:',
      },
      {
        type: 'input',
        name: 'component',
        message: 'Enter the component name:',
      },
      {
        type: 'input',
        name: 'showOnNvigation',
        message: 'Show on navigation:',
      },
    ],
    actions: [
      {
        type: 'modify',
        path: 'src/routes/routesList.js',
        templateFile: 'plop-templates/routes/routesList.js.hbs',
        pattern: /(\/\* PLOP-ROUTE-PLACEHOLDER \*\/)/gi,
      },
    ],
  });
};
