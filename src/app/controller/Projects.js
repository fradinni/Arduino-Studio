/* global AS */
/**
*
*/
Ext.define('AS.controller.Projects', {
  extend: 'Ext.app.Controller',
  projectsManager: null,

  /**
  * Initialize Projects Controller
  */
  onLaunch: function () {
    this.projectsManager = AS.getApplication().projectsManager;
    this.initEventsHandlers();
  },

  initEventsHandlers: function () {
    this.projectsManager.on('projectAdded', this._onProjectAdded.bind(this));
  },

  _onProjectAdded: function (project) {
    console.log('[ProjectsController] Project added: ' + project.getName());
  }

});