/**
* Baud Rates Store
*
*/
Ext.define('AS.store.BaudRates', {
  extend   : 'Ext.data.Store',
  model    : 'AS.model.BaudRate',
  autoLoad : true,

  /**
  * Static data
  */
  data: [
    { 'value' :    300, 'name' : '300 bps' },
    { 'value' :    600, 'name' : '600 bps'},
    { 'value' :   1200, 'name' : '1200 bps' },
    { 'value' :   2400, 'name' : '2400 bps' },
    { 'value' :   4800, 'name' : '4800 bps' },
    { 'value' :   9600, 'name' : '9600 bps' },
    { 'value' :  14400, 'name' : '14400 bps' },
    { 'value' :  19200, 'name' : '19200 bps' },
    { 'value' :  28800, 'name' : '28800 bps' },
    { 'value' :  38400, 'name' : '38400 bps' },
    { 'value' :  57600, 'name' : '57600 bps' },
    { 'value' : 115200, 'name' : '115200 bps' }
  ]
});