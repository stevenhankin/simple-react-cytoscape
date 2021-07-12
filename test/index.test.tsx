import { Core, CytoscapeOptions } from 'cytoscape';
import React from 'react';
import renderer from 'react-test-renderer';
import { SimpleReactCytoscape } from '../src';

test('Render a basic component (no options or callback)', () => {
  const options = {};
  renderer.create(
    <SimpleReactCytoscape />,
  );
});

test('Render a component with options and receive a callback', (done) => {
  const options: CytoscapeOptions = {};
  const cyCallback = (cy: Core) => {
    done();
  };
  renderer.create(
    <SimpleReactCytoscape options={options} cyCallback={cyCallback} />,
  );
});
