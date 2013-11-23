Ext.define('AS.view.components.CodeEditor', {
  extend : 'Ext.Component',
  alias  : 'widget.codeeditor',
  autoEl : {
    tag : 'textarea'
  },
  defaultConfig : {
    lineNumbers   : true,
    indentUnit    : 2,
    matchBrackets : true
  },
  onRender : function () {
    this.callParent();
    // inject the value in the textarea
    this.el.dom.value = this.value || '';
    // create configuration
    var editorConfig = {};
    Ext.apply(editorConfig, this.editorConfig || {}, this.defaultConfig);

    // instanciate codemirror
    this.editor = CodeMirror.fromTextArea(this.el.dom, editorConfig);

    // when this component is resized, resize the codemirror instance
    this.on('resize' , function (textArea, w, h) {
      // the editor is resized automatically except for some special elements
      Ext.fly(this.editor.getWrapperElement()).setHeight(h);
      Ext.fly(this.editor.getScrollerElement()).setHeight(h);
      this.editor.refresh();
    }, this);
  },
  setValue : function (value) {
    var oldValue = this.getValue();
    if (oldValue !== value) {
      if (this.rendered) {
        this.editor.setValue(value);
      } else {
        this.value = value;
      }
      this.fireEvent('change', this, value, oldValue);
    }
  },
  getValue : function () {
    if(this.rendered){
      return this.editor.getValue();
    } else {
      return this.value;
    }
  }
});
