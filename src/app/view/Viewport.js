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
    'AS.view.ProjectsTree',
    'AS.view.components.CodePanel',
    'AS.view.StatusBar'
  ],
  layout: 'fit',

  initComponent: function() {

    /*
     * We use a fitted inner panel to use the panel's advanced features
     * like dockedItems.
     */
    var viewportPanel = this.items = {
      layout : 'border'
    };

    viewportPanel.dockedItems = [{
      /*
       * The main toolbar of the application
       * Do not confused this with the native toolbar (see AS.util.system.menu.*)
       */
      xtype : 'maintoolbar',
      dock  : 'top'
    }, {
      /*
       * Fake border
       * TODO: achieve this without hack
       * TODO: move border height & style to CSS
       */
      xtype  : 'box',
      dock   : 'top',
      height : 7,
      style : {
        backgroundColor : '#3892d3'
      }
    }, {
      /*
       * The status bar contains information about the current state of the application:
       * current operation, errors...
       */
      xtype : 'statusbar',
      dock  : 'bottom'
    }];

    viewportPanel.items = [{
      /*
       * This is where you interact with the filesystem
       * either the file inside a project
       * or the global file system
       * TODO: wrap the project tree in a tab panel
       */
      xtype       : 'projectsTree',
      // layout related options
      region      : 'west',
      width       : 200,
      minWidth    : 150,
      split       : true,
      collapsible : true
    }, {
      /*
       * This is where you edit your code
       * tabs, multiple columns
       * TODO: build a wrapping container, capable of advanced layouting:
       *       multiple rows/columns, tabs, ability to move a tab between
       *       rows/columns...
       */
      xtype  : 'codepanel',
      // layout related options
      region : 'center'
    }];

    this.callParent();
  }

});
