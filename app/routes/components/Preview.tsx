import { useState, useCallback } from "react";
import { DefaultNode, TextUpdaterNode } from "./Nodes";
import { ButtonEd, StraightEd } from "./Edges";
import { Box } from "@mui/material";
import Flowdata from "~/Data/Flowdata.json";
import {
  ReactFlow,
  Background,
  Controls,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const initialNodes = Flowdata.Nodes;

const initialEdges = Flowdata.Edges;

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  DefaultNode: DefaultNode,
};

const edgeTypes = {
  StraightEd: StraightEd,
  ButtonEd: ButtonEd,
};

export default function Preview() {
  // state hooks: nodes & edges
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // OnChange & OnConnect
  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (connection: any) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  return (
    <>
      <Box
        sx={{
          height: { xs: "300px", sm: "400px", lg: "500px" },
          width: { xs: "100%", sm: "80%", lg: "800px" },
          bgcolor: "white",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </Box>
    </>
  );
}
