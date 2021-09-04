const fs = require('fs');
const rushJSON = require('../../rush.json');

const buildCreatePackageGenerator = () => {
  return {
    description: 'Creates a new component package',
    prompts: [
      {
        type: 'list',
        name: 'package-type',
        message: 'What type of package?',
        choices: [...rushJSON.approvedPackagesPolicy.reviewCategories],
      },
      {
        type: 'input',
        name: 'package-name',
        message: 'What is the package name?',
      },
      {
        type: 'input',
        name: 'package-description',
        message: 'What is the component package description?',
      },
    ],
    actions: function (data) {
      data['package-raw-name'] = data['package-name'];

      const packagePaths = data['package-name'].split('.');
      let rootPath = '{{package-type}}/{{kebabCase package-name}}';

      if (packagePaths.length > 1) {
        data['package-raw-name'] = packagePaths.pop();
        rootPath = `{{package-type}}/${packagePaths.join(
          '/'
        )}/{{kebabCase package-raw-name}}`;
      }

      return [
        {
          type: 'add',
          path: `${rootPath}/src/index.ts`,
          templateFile: 'tools/plop/templates/create-package/package-index.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `${rootPath}/src/{{pascalCase package-raw-name}}.tsx`,
          templateFile: 'tools/plop/templates/create-package/package-name.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `${rootPath}/package.json`,
          templateFile: 'tools/plop/templates/create-package/package.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `${rootPath}/tsconfig.json`,
          templateFile: 'tools/plop/templates/create-package/tsconfig.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `${rootPath}/.eslintrc`,
          templateFile: 'tools/plop/templates/create-package/eslintrc.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `${rootPath}/.eslintignore`,
          templateFile: 'tools/plop/templates/create-package/eslintignore.hbs',
          skipIfExists: true,
        },
        function registerPackageInRushJSON(data) {
          const packageName = `@monorepo/${data['package-name']}`;

          if (rushJSON.projects.map(p => p.packageName).includes(packageName)) {
            console.log('[SKIPPED] Package already registered in rush.json');
            return;
          }

          rushJSON.projects.push({
            packageName,
            projectFolder: [data['package-type'], data['package-name']]
              .join('/')
              .replace('.', '/'),
            reviewCategory: data['package-type'],
          });

          fs.writeFile('./rush.json', JSON.stringify(rushJSON), err => {
            if (err) {
              console.log('Error saving rush.json', err);
            } else {
              console.log('Successfully added package in rush.json');
            }
          });
        },
      ];
    },
  };
};

module.exports = buildCreatePackageGenerator;
