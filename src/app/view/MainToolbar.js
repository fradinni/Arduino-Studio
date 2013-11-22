/**
* Main Toolbar View
*
* This view represents the main tollbar in Arduino Studio.
* It takes place on top of the main window.
*
*/
Ext.define('AS.view.MainToolbar',  {
  extend: 'Ext.Toolbar',
  alias: 'widget.maintoolbar',
  requires: [
    'AS.view.components.SerialPortSelect'
  ],

  /**
  * Initialize Main Toolbar
  */
  initComponent : function () {

    this.items = [{
      text   : 'Compile',
      action : 'compile'
    }, {
      text   : 'Upload',
      action : 'upload'
    }, {
      xtype  : 'serialport'
    }, {
      xtype  : 'board'
    }, {
      xtype  : 'baudRate'
    }, '->', {
      text   : 'Serial Monitor',
      action : 'open-serial'
    }];

    this.callParent();
  }

});
