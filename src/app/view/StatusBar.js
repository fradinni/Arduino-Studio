/**
* Status Bar View
*
* This view represents the bottom status bar in Arduino Studio.
*/
Ext.define('AS.view.StatusBar',  {
  extend: 'Ext.Toolbar',
  alias: 'widget.statusbar',
  requires: [
  ],

  style : {
    backgroundColor : '#3892d3'
  },

  initComponent : function () {

    this.items = [
      'Status bar'
    ];
    this.callParent();
  }

});
