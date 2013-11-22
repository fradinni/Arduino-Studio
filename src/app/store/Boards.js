/**
* Boards Store
*
*/
Ext.define('AS.store.Boards', {
  extend: 'Ext.data.Store',
  model: 'AS.model.Board',
  autoLoad: true,

  /**
  * Static data
  */
  data: [
    { 'id': 'uno'     , 'name':'Arduino UNO' },
    { 'id': 'leonardo', 'name':'Arduino Leonardo' },
    { 'id': 'micro'   , 'name':'Arduino Micro' },
    { 'id': 'mega'    , 'name':'Arduino Mega' },
    { 'id': 'due'     , 'name':'Arduino DUE' }
  ]
});