import React, { useEffect, useMemo, useState } from 'react';
import cytoscape, { CytoscapeOptions } from 'cytoscape';
import { nanoid } from 'nanoid';

interface Props {
  options: CytoscapeOptions,
  getCyCallback?: (cy: cytoscape.Core) => void;
}

export const SimpleReactCytoscape: React.FC<Props> = ({ options, getCyCallback: getCy }) => {
  const [cy, setCy] = useState<cytoscape.Core>();
  const id = useMemo(nanoid, []);

  useEffect(() => {
    if (!cy) {
      const newCy = cytoscape({ ...options, container: document.getElementById(id) });
      setCy(newCy);
      if (getCy) {
        getCy(newCy);
      }
    }
  }, [cy, getCy, id, options]);

  return (<div id={id} className="react-simple-cytoscape" />);
};

export default SimpleReactCytoscape;
