#!/usr/bin/env node

const Sort = require('./sorter.js');
const cli = require('commander')


cli
  .version('1.0.3')
  .option('-c, --config [file]', 'configuration to sort by')
  .arguments('<path...>')
  .action(path => {
    path.forEach(p => {
      const sort = new Sort(cli.config || 'yandex');
      sort.processFile(p);
    })
  })
  .parse(process.argv)

