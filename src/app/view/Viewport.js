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
    'AS.view.ProjectsTree',
    'AS.view.StatusBar'
  ],
  layout: 'fit',

  /**
  * Initialize viewport
  */
  initComponent: function() {

    // we use a fitted inner panel to use the panel's advanced features like dockedItems
    var viewportPanel = this.items = {
      layout : 'border'
    };

    viewportPanel.dockedItems = [{
      xtype : 'maintoolbar',
      dock  : 'top'
    }, { // fake border
      xtype : 'box',
      dockt : 'top',
      height : 7, // TODO: move to CSS
      style : {
        backgroundColor : '#3892d3'
      }
    }, {
      xtype : 'statusbar',
      dock  : 'bottom'
    }];

    viewportPanel.items = [
      // WEST: Projects panel
      {
        xtype       : 'projectsTree',
        title       : 'Projects',
        region      : 'west',
        width       : 200,
        minWidth    : 150,
        split       : true,
        collapsible : true,
        rootVisible : true
      },

      // CENTER: Main Panel
      {
        xtype  : 'panel',
        region : 'center'
      }

    ];

    this.callParent();
  }

});
