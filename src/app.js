/**
* Arduino Studio Application
* ArduIDE is developped on top of Sencha ExtJS.
*
*/
Ext.application({
  name              : 'AS', // Namespace alias for Arduino Studio
  models            : ['Board', 'BaudRate'],
  stores            : ['Boards', 'BaudRates'],

  // Vars
  serialPortsWatcher  : null,
  systemMenu          : null,
  appConfig           : null,

  /**
  * Application Start-up
  */
  launch: function() {
    console.log('[Arduino Studio] Initializing...');

    // Load application config file
    this.appConfig = Ext.create('AS.util.ConfigManager', {
      file: './config.json'
    });

    // Initialize stores
    this.initializeGlobalStores();

    // Initialize Serial Ports Watcher
    this.serialPortsWatcher = Ext.create('AS.util.system.SerialPortsWatcher', {
      store: 'serialPortsStore'
    });
    this.serialPortsWatcher.start();

    // Initialize System menu
    this.systemMenu = Ext.create('AS.util.system.menu.SystemMenu');

    // Create viewport
    console.log('[Arduino Studio] Create viewport...');
    Ext.create('AS.view.Viewport');

    console.log('[Arduino Studio] Done.');
  },


  /**
  * Initialize Global Stores
  *
  * These stores are not assigned to a local variable
  * because by specifying a storeId, stores will
  * be automaticaly registered in StoreManager and
  * referenced with specified 'storeId'.
  */
  initializeGlobalStores: function() {

    // Initialize Serial Ports Store
    Ext.create('AS.store.SerialPorts', {
      storeId: 'serialPortsStore'
    });

    // Initialize Files Tree Store
    Ext.create('AS.store.ProjectsTree', {
      storeId: 'projectsTreeStore'
    });

    // Initialize Recent Files Store
    Ext.create('AS.store.RecentFiles', {
      storeId: 'recentFilesStore'
    });
  }
});
