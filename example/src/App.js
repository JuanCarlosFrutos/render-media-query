import React from 'react';
import { RenderMediaQuery } from 'render-media-query'
import './App.css';
import ExampleWithHook from './ExampleWithHook'

function App() {
  return (
    <div className="App">
      <>
        <h1>Example usage component RenderMediaQuery</h1>
        <RenderMediaQuery renderOn={['(min-width: 1200px)']}>
          <div>Render screen min-width 1200px</div>
        </RenderMediaQuery>
        <RenderMediaQuery renderOn={['(min-width: 800px)']}>
          <div>Render screen min-width 800px</div>
        </RenderMediaQuery>
        <RenderMediaQuery renderOn={['(min-width: 400px)']}>
          <div>Render screen min-width 400px</div>
        </RenderMediaQuery>
        <RenderMediaQuery renderOn={['(min-width: 200px)']}>
          <div>Render screen min-width 200px</div>
        </RenderMediaQuery>
      </>
      <>
          <h1>Example usage hook useQueryListener</h1>
          <ExampleWithHook />
      </>
    </div>
  );
}

export default App;
