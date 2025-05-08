import { DefaultNode, TextUpdaterNode } from "~/components/Nodes";
import { ButtonEd, StraightEd } from "~/components/Edges";
import { Box } from "@mui/material";
import Flowdata from "~/Data/Flowdata.json";
import useFlowState from "~/Data/useFlowState";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export function meta() {
  return [{ title: "Create | Skill Garden" }];
}

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  DefaultNode: DefaultNode,
};

const edgeTypes = {
  StraightEd: StraightEd,
  ButtonEd: ButtonEd,
};
export default function Create() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
    useFlowState();
  return (
    <Box
      sx={{
        flexBasis: {
          xs: "60%",
          sm: "60%",
          md: "60%",
          lg: "60%",
        },
        minWidth: 250,
        maxWidth: 1000,
        height: "100vh",
        bgcolor: "#043437",
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
  );
}
