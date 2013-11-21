/**
* Viewport
*
* This class contains the viewport for the main window
* of Arduino Studio. It defines the general layout for
* application's sub views.
*
*/
Ext.define('AS.view.Viewport', {
  extend: 'Ext.container.Viewport',
  requires: [
    'AS.view.MainToolbar',
    'AS.view.components.BoardSelect',
    'AS.view.components.SerialPortSelect',
    'AS.view.components.BaudRateSelect'
  ],
  layout: 'border',


  /**
  * Initialize viewport
  */
  initComponent: function() {

    this.items = [

      // Main toolbar
      {
        xtype           : 'maintoolbar',
        region          : 'north',
        split           : true,
        splitterResize  : false
      },

      // WEST: Projects panel
      {
        width       : 200,
        xtype       : 'panel',
        title       : 'Projects',
        region      : 'west',
        split       : true,
        maxWidth    : 300,
        minWidth    : 150,
        collapsible : true
      },

      // CENTER: Main Panel
      {
        xtype: 'panel',
        region: 'center'
      }

    ];

    this.callParent();
  }

});