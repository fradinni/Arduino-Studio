/**
* Serial Port Select
*
*/
Ext.define('AS.view.components.SerialPortSelect',  {
  extend : 'Ext.form.field.ComboBox',
  alias  : 'widget.serialport',

  model     : 'AS.model.SerialPort',
  store     : 'serialPortsStore',
  queryMode : 'local',

  displayField : 'name',
  valueField   : 'name',
  emptyText    : 'Select a serial port...'
});