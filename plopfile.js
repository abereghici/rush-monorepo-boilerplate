const buildCreatePackageGenerator = require('./tools/plop/create-package');

module.exports = function (plop) {
  plop.setGenerator('create-package', buildCreatePackageGenerator());
};
