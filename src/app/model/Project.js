// NodeJS modules required
var fs = require('fs');

/**
* Project Model
*
* This model represents an Arduino project.
*
*/
Ext.define('AS.model.Project', {

  // Default project properties
  config: {
    path: null,
    name: null,
    board: null,
    buildDir: '.build'
  },

  /**
  * Project constructor
  */
  constructor: function(config) {
    this.initConfig(config);
  },


  /**
  * Set project path
  */
  applyPath: function(path) {
    if(Ext.isString(path)) {
      this.path = path;
      this.name = path.substring(0, path.lastIndexOf('/'));
    }
  },


  /**
  * Set project's build directory
  */
  applyBuildDir: function(buildDir) {
    if(Ext.isString(buildDir)) return buildDir;
  },


  /**
  * Initialize Project
  */
  initialize: function() {

    // First, check if IDE Projec dir exists, if not create it
    if(!this._checkIDEProjectDir()) {
      this._createIDEProjectBuildDir();
    }

  },


  /**
  * Check if IDE Project directory exists.
  *
  * The IDE Project directory is a hidden directory
  * (prefixed by '.') placed in project root dir and
  * containing all files needed for compilation, build
  * and upload to the development board.
  */
  _checkIDEProjectDir: function() {
    return fs.existsSync(this.getBuildDirPath());
  },


  /**
  * Create IDE Project directory
  *
  * IDE Project directory is placed in project's root directory.
  * His name is defined by the 'buildDir' var.
  */
  _createIDEProjectBuildDir: function() {
    fs.mkdirSync(this.getBuildDirPath());
  },


  /**
  * Check if project's sketch file exists in root dir.
  *
  * If not generate it. this sketch file must have
  * the sae name as project.
  */
  _checkSketchFile: function() {
    return fs.existsSync(this.getSketchPath());
  },


  /**
  * Return build dir path of current project
  */
  getBuildDirPath: function() {
    return this.path + '/' + this.buildDir;
  },

  getSketchPath: function() {

  }

});