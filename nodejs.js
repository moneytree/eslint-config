'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const filePath = path.join(__dirname, 'eslintrc', 'nodejs.yml');

const config = fs.readFileSync(filePath, { encoding: 'utf8' });

module.exports = yaml.safeLoad(config);
