import React, { useEffect, useRef, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import 'monaco-editor/esm/vs/language/json/monaco.contribution';

const Index = () => {
  const editorContainer = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(
    '{\n' + '  "type": "FeatureCollection",\n' + '  "features": []\n' + '}',
  );

  return (
    <div ref={editorContainer} className="pageFull">
      <MonacoEditor
        width={editorContainer.current?.clientWidth}
        height={editorContainer.current?.clientHeight}
        language="json"
        theme="vs-dark"
        value={value}
        onChange={setValue}
        options={{}}
      />
    </div>
  );
};

export default Index;
