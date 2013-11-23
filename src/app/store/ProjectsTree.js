/**
* Files Tree Store
*
*/
Ext.define('AS.store.ProjectsTree', {
  extend   : 'Ext.data.TreeStore',
  autoLoad : false,
  root : {
    text     : 'Projects',
    id       : null,
    expanded : true,
    children : []
  }
});