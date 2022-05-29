import * as React from 'react';
import { Frame } from '../packages/tailwind-layout-react/src';

function App() {
  return (
    <div className="App">
      <Frame as="h1" className="custom-class" w="full" isolate="auto" inset="40">
        Frame layout
      </Frame>
    </div>
  );
}

export default App;
