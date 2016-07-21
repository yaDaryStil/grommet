// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import path from 'path';
import cssnext from 'postcss-cssnext';
import modulesValues from 'postcss-modules-values';
import atImport from 'postcss-import';
import vars from 'postcss-simple-vars';
import mixins from 'postcss-mixins';

export function getPackageJSON () {
  delete require.cache[require.resolve('./package.json')];
  var packageJSON = require('./package.json');
  delete packageJSON.config;
  delete packageJSON.scripts;
  packageJSON.main = 'index.js';
  return packageJSON;
}

export default {
  dist: path.resolve(__dirname, 'dist'),
  copyAssets: [
    'README.md',
    {
      asset: 'src/js/**',
      babel: true,
      ignores: [
        'styles'
      ]
    },
    {
      asset: 'src/scss/**',
      dist: 'dist/scss/'
    },
    {
      asset: 'src/js/styles/**',
      dist: 'dist/styles/'
    },
    {
      asset: 'src/utils/**',
      dist: 'dist/utils/'
    },
    {
      asset: 'src/img/**',
      dist: 'dist/img/'
    },
    {
      asset: 'bin/**',
      dist: 'dist/bin/'
    },
    {
      asset: 'templates/**',
      dist: 'dist/templates/'
    },
    {
      asset: 'examples/**',
      dist: 'dist/examples/',
      ignores: [
        'node_modules/',
        'dist/'
      ]
    },
    {
      filename: 'package.json',
      asset: JSON.stringify(getPackageJSON(), null, 2)
    }
  ],
  scssAssets: ['src/scss/**/*.scss'],
  jsAssets: [
    'src/js/**/*.js',
    '!src/js/components/icons/base/**',
    '!src/js/index.js',
    '!src/js/index-icons.js',
    '!src/js/messages/**',
    '!src/js/mixins/**'
  ],
  mainJs: 'src/js/index.js',
  mainScss: 'src/scss/grommet-core/index.scss',
  icons: {
    source: 'src/img/icons',
    destination: 'src/js/components/icons/base',
    context: '../../../'
  },
  sync: {
    hostname: 'grommet.io',
    username: 'grommet',
    remoteDestination: '/var/www/html/assets/' + getPackageJSON().version
  },
  webpack: {
    output: {
      filename: 'grommet.min.js',
      libraryTarget: 'var',
      library: 'Grommet'
    },
    resolve: {
      alias: {
        'grommet': path.resolve(__dirname, 'src/js')
      },
      modulesDirectories: ['node_modules', 'src/js', 'src/scss']
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        }
      ]
    },
    postcss: () => [atImport(), mixins, vars, cssnext, modulesValues]
  },
  distPreprocess: ['generate-index-icons', 'dist-css'],
  scsslint: true
};
