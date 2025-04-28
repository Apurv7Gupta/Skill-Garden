import { useState, useCallback } from "react";
import { DefaultNode, TextUpdaterNode } from "./components/Nodes";
import { ButtonEd, StraightEd } from "./components/Edges";
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

export function meta() {
  return [{ title: "Create | Skill Garden" }];
}

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
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Left Panel */}
        <Box
          sx={{
            flexBasis: {
              xs: "20%", // 20% width on extra small screens
              sm: "20%",
              md: "20%",
            },
            minWidth: 100,
            bgcolor: "#f0f0f0",
          }}
        >
          {/* Left panel content */}
        </Box>

        {/* Center React Flow Panel */}
        <Box
          sx={{
            flexBasis: {
              xs: "60%", // 60% width on small screens
              sm: "60%",
              md: "60%",
              lg: "60%",
            },
            minWidth: 250,
            maxWidth: 1000,
            height: "100vh",
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

        {/* Right Panel */}
        <Box
          sx={{
            flexBasis: {
              xs: "20%",
              sm: "20%",
              md: "20%",
            },
            minWidth: 100,
            bgcolor: "#f0f0f0",
          }}
        >
          {/* Right panel content */}
        </Box>
      </Box>
    </>
  );
}
