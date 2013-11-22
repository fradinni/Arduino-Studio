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
    this.checkConfigFile();
  },


  /**
  *
  */
  checkConfigFile: function() {
    if(!fs.existsSync(this.getFile())) {
      this.save();
    }
  },


  /**
  * Save config to disk
  */
  save: function() {
    fs.writeFileSync(this.getFile(), this.getContent());
  }

});