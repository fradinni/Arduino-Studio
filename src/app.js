/**
* Arduino Studio Application
* ArduIDE is developped on top of Sencha ExtJS.
*
*/
Ext.application({
  name              : 'AS', // Namespace alias for Arduino Studio
  models            : ['Board', 'BaudRate', 'SerialPort'],
  stores            : ['Boards', 'BaudRates', 'SerialPorts'],

  // Vars
  serialPortsWatcher: null,

  /**
  * Application Start-up
  */
  launch: function() {
    console.log('[Arduino Studio] Initializing...');

    // Initialize stores
    this.initializeStores();

    // Initialize Serial Ports Watcher
    this.serialPortsWatcher = Ext.create('AS.utils.SerialPortsWatcher', {
      store: 'serialPortsStore'
    });
    this.serialPortsWatcher.start();

    // Create viewport
    console.log('[Arduino Studio] Create viewport...');
    Ext.create('AS.view.Viewport');

    console.log('[Arduino Studio] Done.');
  },


  /**
  *
  */
  initializeStores: function() {

    // Initialize Serial Ports Store
    //
    // This store is not assigned to a local variable
    // because by specifying a storeId, this store will
    // be automaticaly registered in StoreManager and
    // referenced with specified 'storeId'.
    //
    Ext.create('AS.store.SerialPorts', {
      storeId: 'serialPortsStore'
    });
  }
});
