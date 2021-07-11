import cytoscape, { Core, CytoscapeOptions } from 'cytoscape';
import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';
import { SimpleReactCytoscape } from '../src';

test('Render a basic component (no options or callback)', () => {
    const options = {};
    renderer.create(
        <SimpleReactCytoscape />
    )
});

test('Render a component and receive a callback',  (done) => {
    const options: CytoscapeOptions = {};
    const getCyCallback = (cy: Core) => {
        done()
    }
    renderer.create(
        <SimpleReactCytoscape options={options} 
        getCyCallback={getCyCallback}
        />
    )
});
