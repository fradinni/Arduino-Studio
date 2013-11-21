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
    'AS.view.components.BaudRateSelect',
    'AS.view.ProjectsTree'
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
        xtype       : 'projectsTree',
        title       : 'Projects',
        region      : 'west',
        width       : 200,
        minWidth    : 150,
        split       : true,
        collapsible : true,
        rootVisible : false
      },

      // CENTER: Main Panel
      {
        xtype : 'panel',
        region: 'center'
      }

    ];

    this.callParent();
  }

});