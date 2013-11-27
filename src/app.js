/**
* Arduino Studio Application
* ArduIDE is developped on top of Sencha ExtJS.
*
*/
Ext.application({
  name        : 'AS', // Namespace alias for Arduino Studio
  models      : ['Board', 'BaudRate', 'Project'],
  stores      : ['Boards', 'BaudRates'],
  controllers : ['Main', 'Projects'],

  // Vars
  serialPortsWatcher  : null,
  systemMenu          : null,
  appConfig           : null,
  projectsManager     : null,


  /**
  * Application Start-up
  */
  launch : function () {
    console.log('[Arduino Studio] Initializing...');

    // Load application config file
    this.appConfig = Ext.create('AS.util.ConfigManager', {
      file : './config.json'
    });

    // Initialize stores
    this.initializeGlobalStores();

    // Initialize Serial Ports Watcher
    this.serialPortsWatcher = Ext.create('AS.util.system.SerialPortsWatcher', {
      store : 'serialPortsStore'
    });
    this.serialPortsWatcher.start();

    // Initialize System menu
    this.systemMenu = Ext.create('AS.util.system.menu.SystemMenu');

    // Initialize projects manager
    this.projectsManager = Ext.create('AS.util.ProjectsManager', {
      store: 'projectsStore'
    });

    // Create viewport
    console.log('[Arduino Studio] Create viewport...');
    Ext.create('AS.view.Viewport');

    console.log('[Arduino Studio] Done.');

    setTimeout(this.fakeTimeout.bind(this), 2000);
  },


  /**
  * Initialize Global Stores
  *
  * These stores are not assigned to a local variable
  * because by specifying a storeId, stores will
  * be automaticaly registered in StoreManager and
  * referenced with specified 'storeId'.
  */
  initializeGlobalStores : function () {

    // Initialize Serial Ports Store
    Ext.create('AS.store.SerialPorts', {
      storeId : 'serialPortsStore'
    });

    // Initialize Recent Files Store
    Ext.create('AS.store.Projects', {
      storeId : 'projectsStore'
    });

    // Initialize Files Tree Store
    Ext.create('AS.store.ProjectsTree', {
      storeId : 'projectsTreeStore'
    });

    // Initialize Recent Files Store
    Ext.create('AS.store.RecentFiles', {
      storeId : 'recentFilesStore'
    });
  },


  fakeTimeout: function () {
    this.projectsManager.openProject('./test_project');

    /*
    setTimeout(function () {
      var store = Ext.data.StoreManager.lookup('projectsTreeStore');
      store.getRootNode().appendChild({ id: 'test', text: 'New node', expanded: true });
      var node = store.getNodeById('test');
      node.appendChild({id: '1', text: 'node', leaf: true});

    }, 2000);
    */
  },
});
