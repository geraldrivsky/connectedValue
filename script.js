function connectedValue(node) {
  let edges = node.edges;
  let totalValue = node.value;
  let tracedEdges = new Set([node]);

  traceEdges(edges);

  return totalValue;

  function traceEdges(edges) {
    for (let i = 0; i < edges.length; i++) {
      let edge = edges[i];

      if (tracedEdges.has(edge)) {
        continue;
      }

      totalValue += edge.value;
      tracedEdges.add(edge);
      traceEdges(edge.edges);
    }
  }
}
