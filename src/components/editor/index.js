import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Range } from 'monaco-editor';

// import { Container } from './styles';

const seed = `<div>

</div>`;

const Editor = () => {
  const [code] = useState(seed);


  const options = {
    selectOnLineNumbers: true,
  };

  const editorDidMount = (editor,monaco) => {
    console.log(monaco)
    monaco.languages.html.htmlDefaults.setOptions({
      validate: true,
      format: {
        tabSize: 2,
        insertSpaces: false,
        wrapLineLength: 120,
        indentInnerHtml: true,
        preserveNewLines: true,
        maxPreserveNewLines: null,
        indentHandlebars: false,
        endWithNewline: false,
        extraLiners: 'head, body, /html',
        wrapAttributes: 'auto',
      },
      suggest: {
        html5: true,
      },
    });
  };

  return (
    <MonacoEditor
      width="800"
      height="600"
      language="html"
      theme="vs-dark"
      value={code}
      options={options}
      editorDidMount={editorDidMount}
    />
  );
};

export default Editor;
