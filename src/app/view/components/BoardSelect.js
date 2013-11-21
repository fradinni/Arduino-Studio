/**
* Board Select
*/
Ext.define('AS.view.components.BoardSelect',  {
  extend: 'Ext.form.field.ComboBox',
  alias: 'widget.board',
  model: 'AS.model.Board',
  queryMode: 'local',
  store: 'Boards',
  displayField: 'name',
  valueField: 'id',
  emptyText: 'Select a board...'
});