// NodeJS required modules

/**
* Arduino Project builder
*/
Ext.Define('AS.util.ProjectBuilder', {

  // Default parameters
  config: {
    project: null,
  },


  /**
  * Project Builder Constructor
  */
  constructor: function(config) {
    this.initConfig(config);
  },


  /**
  * Build current project
  */
  build: function() {

  },


  /**
  * Check if everything needed for the build is available.
  *
  * Typically, it will check if arduino toolchain binaries
  * c/c++ Arduino dependencies exists.
  *
  */
  _checkBuildRequirements: function() {

  },


  /**
  * Check if all dirs needed for the build are available.
  */
  _checkRequiredDirs: function() {

  },

  /**
  * Check if all binaries required for the build are available
  */
  _checkRequiredBinaries: function() {

  }

});