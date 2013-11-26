/**
* Recent Files Manager
*
*/
Ext.define('AS.utils.RecentFilesManager', {

  config : {
    store : null
  },


  /**
  * Default constructor
  */
  constructor : function (config) {
    this.initConfig(config);
  },


  /**
  * Initialize Store
  */
  applyStore : function (storeId) {
    var store = Ext.data.StoreManager.lookup(storeId);
    if (store) {
      return store;
    }
  },


  addRecentFile: function(sourceFile) {

  },

  addRecentProject: function(project) {

  }

});