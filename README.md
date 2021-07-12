# simple-react-cytoscape
A lightweight React Component wrapper for Cytoscape to simplify integration


---

## Installation
```
npm install simple-react-cytoscape cytoscape
```

---

## Usage
1) Configure CSS for class `simple-react-cytoscape`
```css
.simple-react-cytoscape {
  width: 600px;
  height: 600px;
}
```
2) Import library
```js
import { SimpleReactCytoscape } from "simple-react-cytoscape";
```
3) Use the component with options (to pass data to the graph) and a callback (to get access to the cytoscape container for controls)
```html
      <SimpleReactCytoscape
              options={options} 
              cyCallback={cyCallback} />
```

---

## Examples
See [CodeSandbox example](https://codesandbox.io/s/simple-react-cytoscape-5dx2o)

