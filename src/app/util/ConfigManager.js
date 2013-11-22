// NodeJS modules required by Config Manager
var fs = require('fs');

/**
* Config Manager
*
*/
Ext.define('AS.util.ConfigManager', {

  // Default config
  config: {
    file: './config.json',
    content: {}
  },


  /**
  * Default constructor
  */
  constructor: function(config) {
    this.initConfig(config);
    this.loadConfigFile();
  },

  applyFile: function(file) {
    if(Ext.isString(file)) {
      return file;
    }
  },

  applyContent: function(content) {
    if(Ext.isObject(content)) {
      return content;
    }
  },


  /**
  *
  */
  loadConfigFile: function() {
    if(!fs.existsSync(this.getFile())) {
      console.log('[ConfigManager] Create config file: ' + this.getFile());
      this.save();
    } else {
      console.log('[ConfigManager] Load config file: ' + this.getFile());
      this.content = JSON.parse(fs.readFileSync(this.getFile()));
    }
  },


  /**
  * Save config to disk
  */
  save: function() {
    fs.writeFileSync(this.getFile(), JSON.stringify(this.getContent()));
  },


  /**
  * Return config file
  */
  get: function() {
    return this.content;
  },


  /**
  * Get property in current config
  */
  getProperty: function(key) {
    return this.content[key];
  },


  /**
  * Set property in current config
  */
  setProperty: function(key, value) {
    this.content[key] = value;
  }

});