// NodeJS modules required by System Menu
var gui = require('nw.gui');
var Window = gui.Window.get();


/**
* System Menu
*
* This class is used to build the native
* application System Menu.
*
*/
Ext.define('AS.util.system.menu.SystemMenu', {

  systemMenu      : null,
  fileMenu        : null,
  openRecentMenu  : null,

  /**
  * System Menu Constructor
  */
  constructor: function(config) {
    this.initConfig(config);
    this.systemMenu = new gui.Menu({ type: 'menubar' });
    this.initMenus();
  },


  /**
  * Initialize system menus
  */
  initMenus: function() {
    console.log('[SystemMenu] Initialize system menu.');
    // Set menu as System Menu
    Window.menu = this.systemMenu;

    // Initialize File menu
    this.initFileMenu();
  },


  /**
  * Initialize File menu
  */
  initFileMenu: function() {

    // Create file menu
    this.fileMenu = new gui.Menu();

    // New file
    this.fileMenu.append(new gui.MenuItem({
      label: 'Nouveau fichier',
      click: function(){},
    }));

    // Open file
    this.fileMenu.append(new gui.MenuItem({
      label: 'Ouvrir...',
      click: function(){}
    }));

    // Open recent menu
    this.openRecentMenu = new gui.Menu();
    this.openRecentMenu.append(new gui.MenuItem({
      label: 'Ouvrir le dernier fichier fermé...',
      click: function(){}
    }));
    this.openRecentMenu.append(new gui.MenuItem({ type: 'separator' }));
    this.fileMenu.append(new gui.MenuItem({ label: 'Ouvrir récent', submenu: this.openRecentMenu }));

    // Open folder
    this.fileMenu.append(new gui.MenuItem({
      label: 'Ouvrir dossier...',
      click: function() {}
    }));

    // Separator
    this.fileMenu.append(new gui.MenuItem({ type: 'separator' }));

    // Save file
    this.fileMenu.append(new gui.MenuItem({
      label: 'Enregistrer',
      click: function() {}
    }));

    // Save file as
    this.fileMenu.append(new gui.MenuItem({
      label: 'Enregistrer sous...',
      click: function(){}
    }));

    // Save all files
    this.fileMenu.append(new gui.MenuItem({
      label: 'Enregistrer tout les fichiers',
      click: function() {}
    }));

    // Separator
    this.fileMenu.append(new gui.MenuItem({ type: 'separator' }));

    // Close file
    this.fileMenu.append(new gui.MenuItem({
      label: 'Fermer le fichier',
      click: function() {}
    }));

    // Close all files
    this.fileMenu.append(new gui.MenuItem({
      label: 'Fermer tous les fichiers',
      click: function() {}
    }));

    // Insert file menu in System Menu
    this.systemMenu.insert(new gui.MenuItem({ label: 'Fichier', submenu: this.fileMenu}), 1);
  }

});
