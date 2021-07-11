import React, { useEffect, useMemo, useState } from "react";
import cytoscape, { CytoscapeOptions } from "cytoscape";

interface SRCProps {
  options?: CytoscapeOptions;
  // Callback will return the cytoscape instance once available
  cyCallback?: (cy: cytoscape.Core) => void;
}

const nextId = (() => {
  let id = 0;
  return () => {
    return `${id++}`;
  };
})();

export const SimpleReactCytoscape: React.FC<SRCProps> = ({
  options,
  cyCallback: getCy,
}) => {
  const [cy, setCy] = useState<cytoscape.Core>();
  const id = useMemo(nextId, []);

  useEffect(() => {
    if (!cy) {
      // Determine if running Headless (the unit test are headless)
      const container =
        typeof window === "undefined" || typeof process === "object"
          ? undefined
          : document.getElementById(id);
      const newCy = cytoscape({
        ...options,
        container,
      });
      setCy(newCy);
      // If a callback was supplied we can now return the value
      if (getCy) {
        getCy(newCy);
      }
    }
  }, [cy, getCy, id, options]);

  return <div id={id} className="react-simple-cytoscape" />;
};

export default SimpleReactCytoscape;
