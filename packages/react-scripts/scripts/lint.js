const spawn = require('react-dev-utils/crossSpawn');
const yargsParser = require('yargs-parser');
const { resolveBin, fromRoot, appDirectory } = require('./utils');

let args = process.argv.slice(2);
const parsedArgs = yargsParser(args);

const cache = args.includes('--no-cache')
  ? []
  : [
      '--cache',
      '--cache-location',
      fromRoot('node_modules/.cache/.eslintcache'),
    ];

const files = parsedArgs._;

const relativeEslintNodeModules = 'node_modules/@monorepo/eslint-config';
const pluginsDirectory = `${appDirectory}/${relativeEslintNodeModules}`;

const resolvePluginsRelativeTo = [
  '--resolve-plugins-relative-to',
  pluginsDirectory,
];

const result = spawn.sync(
  resolveBin('eslint'),
  [
    ...cache,
    ...files,
    ...resolvePluginsRelativeTo,
    '--no-error-on-unmatched-pattern',
  ],
  { stdio: 'inherit' }
);

process.exit(result.status);
