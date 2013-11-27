/**
* Project Model
*
* This model represents an Arduino project.
*
*/
Ext.define('AS.model.Project', {
  extend: 'Ext.data.Model',
  fields: ['path'],


  /**
  * Return project name extracted from project path
  */
  getName: function () {
    var path = this.get('path');
    return path.substring(path.lastIndexOf('/') + 1);
  }

});