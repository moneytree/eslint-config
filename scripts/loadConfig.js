'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

module.exports = (name) => {
  const filePath = path.join(__dirname, '..', 'eslintrc', `${name}.yml`);

  // eslint-disable-next-line node/no-sync
  const config = fs.readFileSync(filePath, { encoding: 'utf8' });

  return yaml.safeLoad(config);
};
