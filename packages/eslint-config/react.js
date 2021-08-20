const readPkgUp = require('read-pkg-up');
const semver = require('semver');

let oldestSupportedReactVersion = '17.0.1';

// Get react version from package.json and used it in lint configuration
try {
  const pkg = readPkgUp.sync({ normalize: true });
  const allDeps = Object.assign(
    { react: '17.0.1' },
    pkg.peerDependencies,
    pkg.devDependencies,
    pkg.dependencies
  );

  oldestSupportedReactVersion = semver
    .validRange(allDeps.react)
    .replace(/[>=<|]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .sort(semver.compare)[0];
} catch (error) {
  // ignore error
}

module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'prettier/react',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
  ],
  plugins: ['react', 'react-hooks', 'testing-library', 'prettier'],
  settings: {
    react: {
      version: oldestSupportedReactVersion,
    },
  },
  rules: {
    'react/jsx-fragments': ['error', 'element'],
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        ],
      },
    },
  ],
};
