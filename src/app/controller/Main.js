Ext.define('AS.controller.Main', {
  extend: 'Ext.app.Controller',

  init: function() {
    this.control({
      'viewport maintoolbar button[action=open-serial]': {
        click: this.onOpenSerialClicked
      },
      'viewport maintoolbar button[action=compile]': {
        click: this.onCompileClicked
      },
      'viewport maintoolbar button[action=upload]': {
        click: this.onUploadClicked
      }
    });
  },

  onOpenSerialClicked: function() {
    alert('serial');
  },
  onCompileClicked: function() {
    alert('compile');
  },
  onUploadClicked: function() {
    alert('upload');
  }
});
