const spawn = require('react-dev-utils/crossSpawn');
const { resolveBin } = require('./utils');

const args = process.argv.slice(2);

result = spawn.sync(resolveBin('lint-staged'), [...args], {
  stdio: 'inherit',
});

process.exit(result.status);
