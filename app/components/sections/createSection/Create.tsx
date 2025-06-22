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
        flex: "1 1 auto", // allow flex growth and shrink
        minWidth: 0, // allow flex child to shrink below content width if needed
        height: "100%", // fill parent's height, not viewport height
        bgcolor: "#043437",
        overflow: "hidden", // hide scrollbars inside ReactFlow container
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
