/**
* Serial Ports Watcher
*
* This util is watching serial ports to detect
* changes and keep serial ports store up to date.
*
*/
Ext.define('AS.util.system.SerialPortsWatcher', {

  config: {
    store: null,
    interval: 2000,
  },

  timer: null,


  /**
  * Default constructor
  */
  constructor: function(config) {
    this.initConfig(config);
  },


  /**
  * Initialize Store
  */
  applyStore: function(storeId) {
    var store = Ext.data.StoreManager.lookup(storeId);
    if(store) {
      return store;
    }
  },


  /**
  * Initialize Store
  */
  applyInterval: function(interval) {
    if(!Ext.isNumber(interval)) {
      console.log('[SerialPortsWatcher] Error: Interval miust be a number !');
    } else {
      return interval;
    }
  },


  /**
  * List available Serial Port on user's machine
  */
  updateSerialPorts: function() {
    var serialport = require('serialport');
    var scope = this;

    serialport.list(function (err, ports) {
      if(err) {
        console.log(err);
      } else {
        // Retrive serial ports store
        var store = scope.getStore();

        // Check if ports count has changed
        // if yes, update store
        if(store.count() !== ports.length) {
          scope._updateStore(ports);
          return;
        }

        // Check if ports are the same in store and in system list
        var hasChanged = false;

        // Compare system list with store list
        ports.forEach(function(port) {
          if(store.find('name', port.comName) === -1) {
            hasChanged = true;
          }
        });

        // If content has changed update store
        if(hasChanged) {
          scope._updateStore(ports);
        }
      }
    });
  },


  /**
  * Update store content
  * @param ports {Array} List of serial ports
  */
  _updateStore: function(ports) {

    console.log('[SerialPortsWatcher] Update store with ports list: ', ports);

    // Retrieve serial ports strore
    var store = this.getStore();

    // Remove all items
    store.removeAll();

    // Fill store with new serial ports
    ports.forEach(function(port) {
      store.add(Ext.create('AS.model.SerialPort', { name: port.comName }));
    });
  },


  /**
  * Start serial sorts watching
  */
  start: function() {
    this.updateSerialPorts();
    this.timer = setInterval((function() {
      this.updateSerialPorts();
    }).bind(this), this.getInterval());
    console.log('[SerialPortsWatcher] Watcher started ! Interval is set to ' + this.getInterval() + 'ms.');
  },


  /**
  * Stop serial ports watching
  */
  stop: function() {
    clearInterval(this.timer);
  }

});