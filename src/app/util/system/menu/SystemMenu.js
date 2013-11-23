// NodeJS modules required by System Menu
var gui    = require('nw.gui');
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
  constructor : function (config) {
    this.initConfig(config);
    this.systemMenu = new gui.Menu({ type: 'menubar' });
    this.initMenus();
  },


  /**
  * Initialize system menus
  */
  initMenus : function () {
    console.log('[SystemMenu] Initialize system menu.');
    // Set menu as System Menu
    Window.menu = this.systemMenu;

    // Initialize File menu
    this.initFileMenu();
  },


  /**
  * Initialize File menu
  */
  initFileMenu : function () {

    // Create file menu
    var fileMenu = this.fileMenu = new gui.Menu();

    // Open recent menu
    this.openRecentMenu = new gui.Menu();
    this.openRecentMenu.append(new gui.MenuItem({
      label : 'Ouvrir le dernier fichier fermé...',
      click : function () {}
    }));
    this.openRecentMenu.append(new gui.MenuItem({ type : 'separator' }));


    var items = [
      // New file
      {
        label : 'Nouveau fichier',
        click : function () {}
      },
      // Open file
      {
        label : 'Ouvrir...',
        click : function () {}
      },
      // Open recent menu
      {
        label   : 'Ouvrir récent',
        submenu : this.openRecentMenu
      },
      // Open folder
      {
        label : 'Ouvrir dossier...',
        click : function () {}
      },
      // Separator
      { type : 'separator' },
      // Save file
      {
        label : 'Enregistrer',
        click : function () {}
      },
      // Save file as
      {
        label : 'Enregistrer sous...',
        click : function () {}
      },
      // Save all files
      {
        label : 'Enregistrer tout les fichiers',
        click : function () {}
      },
      // Separator
      { type : 'separator' },
      // Close file
      {
        label : 'Fermer le fichier',
        click : function () {}
      },
      // Close all files
      {
        label : 'Fermer tous les fichiers',
        click : function () {}
      }
    ];

    items.forEach(function (item) {
      fileMenu.append(new gui.MenuItem(item));
    });

    // Insert file menu in System Menu
    this.systemMenu.insert(new gui.MenuItem({ label : 'Fichier', submenu : fileMenu}), 1);
  }

});
