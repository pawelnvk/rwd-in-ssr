const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const isDirectory = source => lstatSync(source).isDirectory();
const isListedIn = omitted => directory => omitted.indexOf(directory) === -1;

const getDirectories = (source, omitDirectories = []) =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .filter(isListedIn(omitDirectories));

module.exports = getDirectories;
