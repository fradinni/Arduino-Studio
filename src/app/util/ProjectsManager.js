// NodeJS required modules
var fs = require('fs');


/**
* Projects Manager
*
*/
Ext.define('AS.util.ProjectsManager', {
  mixins: {
    observable: 'Ext.util.Observable'
  },


  // Default config
  config: {
    store: null
  },


  /**
  * Projects Manager Constructor
  */
  constructor: function (config) {
    console.log('[ProjectsManager] Initialize projects manager...');
    this.mixins.observable.constructor.call(this, config);
    this.addEvents(
        'projectAdded'
    );
    this.initConfig(config);
  },


  /**
  * Apply Store var
  */
  applyStore: function (storeId) {
    var store = Ext.getStore(storeId);
    if (store) {
      store.on('add', this._onProjectAdded.bind(this));
      return store;
    }
  },


  /**
  * Open an existing project on disk
  */
  openProject: function (path) {
    // If project is not already opened
    if (!this.isProjectOpened(path)) {

      // Check if project exists on disk
      if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
        this.store.add(Ext.create('AS.model.Project', {
          path: path
        }));
      } else {
        console.error('[ProjectsManager] Project doesn\'t exists on disk !');
      }
    }
  },


  /**
  * Check if a project is already opened
  */
  isProjectOpened: function (path) {
    return (this.store.find('path', path) !== -1);
  },




  /////////////////////////////////////////////////////////////////////////////
  // Events Handlers
  //


  /**
  * Triggered when a project was added to store
  */
  _onProjectAdded: function (store, records, index) {
    var project = this.store.getAt(index);
    this.fireEvent('projectAdded', project);
  }

});