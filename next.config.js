const withSass = require('@zeit/next-sass');
const { join } = require('path');

const getDirectories = require('./scripts/getDirectories');

module.exports = withSass({
  cssModules: true,
  webpack(config) {
    getDirectories('./', ['.next', 'node_modules', 'scripts']).forEach(path => {
      config.resolve.alias[path] = join(__dirname, path);
    });

    return config;
  },
  sassLoaderOptions: {
    includePaths: ['./styles'],
  },
});
