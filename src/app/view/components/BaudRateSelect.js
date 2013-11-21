/**
* Baud Rate Select
*
* This class represents a ComboBox containing available
* baud rates for serial connection with connected board
*
*/
Ext.define('AS.view.components.BaudRateSelect',  {

  // Main parameters
  extend        : 'Ext.form.field.ComboBox',
  alias         : 'widget.baudRate',
  model         : 'AS.model.BaudRate',
  store         : 'BaudRates',

  // Other parameters
  queryMode     : 'local',
  displayField  : 'name',
  valueField    : 'value',
  emptyText     : 'Select a speed...',
  value         : 9600

});