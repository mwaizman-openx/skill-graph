import React from 'react';
import ForceGraph2D from 'react-force-graph';

const SkillsGraph = () => {
  const data = {
    nodes: [
      { id: 'Beginner 1', level: 'Beginner', color: 'green' },
      { id: 'Beginner 2', level: 'Beginner', color: 'green' },
      { id: 'Intermediate 1', level: 'Intermediate', color: 'orange' },
      { id: 'Intermediate 2', level: 'Intermediate', color: 'orange' },
      { id: 'Advanced 1', level: 'Advanced', color: 'red' },
      { id: 'Advanced 2', level: 'Advanced', color: 'red' },
    ],
    links: [
      { source: 'Beginner 1', target: 'Beginner 2' },
      { source: 'Beginner 1', target: 'Intermediate 1' },
      { source: 'Intermediate 1', target: 'Intermediate 2' },
      { source: 'Intermediate 2', target: 'Advanced 1' },
      { source: 'Advanced 1', target: 'Advanced 2' },
    ],
  };

  const handleNodeClick = (node) => {
    console.log(`Node clicked: ${node.id}`);
  };

  return (
    <ForceGraph2D
      graphData={data}
      nodeAutoColorBy="level"
      nodeCanvasObject={(node, ctx, globalScale) => {
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI);
        ctx.fill();
      }}
      onNodeClick={handleNodeClick}
    />
  );
};

export default SkillsGraph;
