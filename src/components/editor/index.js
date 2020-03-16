import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Range } from 'monaco-editor';

// import { Container } from './styles';

const seed =`
{
    "p1": "v3",
    "p2": false
}
`;

const Editor = () => {
  const [code] = useState(seed);


  const options = {
    selectOnLineNumbers: true,
  };

  const editorDidMount = (editor, monaco)  =>{
    // configure the JSON language support with schemas and schema associations
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      enableSchemaRequest: true,
      validate: true,
      allowComments: true,
      schemas: [{
          uri: "http://myserver/foo-schema.json", // id of the first schema
          fileMatch: ['*'], // associate with our model
          schema: {
              type: "object",
              properties: {
                  p1: {
                      enum: ["v1", "v2"]
                  },
                  p2: {
                      $ref: "http://myserver/bar-schema.json" // reference the second schema
                  }
              }
          }
      }, {
          uri: "http://myserver/bar-schema.json", // id of the first schema
          schema: {
              type: "object",
              properties: {
                  q1: {
                      enum: ["x1", "x2"]
                  }
              }
          }
      }]
    });
  }

  return (
    <MonacoEditor
      width="800"
      height="600"
      language="json"
      theme="vs-dark"
      value={code}
      options={options}
      editorDidMount={editorDidMount}
    />
  );
};

export default Editor;
