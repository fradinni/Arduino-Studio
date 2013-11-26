/**
* Files Tree View
*/
Ext.define('AS.view.ProjectsTree', {
  // definitions
  extend : 'Ext.tree.Panel',
  alias  : 'widget.projectsTree',
  // data
  store  : 'projectsTreeStore',
  // appearance
  title       : 'Projects',
  rootVisible : true
});