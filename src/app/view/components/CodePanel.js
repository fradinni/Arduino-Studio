Ext.define('AS.view.components.CodePanel', {
  extend : 'Ext.Panel',
  alias  : 'widget.codepanel',
  requires: [
    'AS.view.components.CodeEditor'
  ],
  layout : 'fit',

  initComponent : function () {
    this.dockedItems = [{
      dock : 'top',
      xtype : 'toolbar',
      items : [{
        text : 'some'
      },{
        text : 'buttons'
      }]
    }, {
      dock : 'bottom',
      xtype : 'toolbar',
      items : ['0 errors']
    }];

    this.items = {
      xtype : 'codeeditor',
      value : '// your code here\n\nvoid setup() {\n}\nvoid loop() {\n}\n',
      editorConfig : {
        mode : 'text/x-c++src'
      }
    };
    this.callParent();
  }
})