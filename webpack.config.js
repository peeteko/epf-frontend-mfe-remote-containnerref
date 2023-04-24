/*const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  library : { type : "module"},
  name: 'mfeEpfPlugins',

  exposes: {
    './Module': './src/app/plugins-home/plugins-home.module.ts',
  }//,

  //shared: {
  //  ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  //},

});*/

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const share = mf.share;

module.exports = {
  output: {
    uniqueName: "mfeEpfPlugins",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        name: "mfeEpfPlugins",
        filename: "remoteEntry.js",
        exposes: {
          './Module': './src/app/plugins/plugins-home/plugins-home.module.ts',
          './PluginConnectionsComponent' : './src/app/plugins/plugin-connections/plugin-connections.component.ts'
        },
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' }
        })

    })
  ],
};

