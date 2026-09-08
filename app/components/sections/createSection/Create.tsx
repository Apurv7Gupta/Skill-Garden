import { DefaultNode, TextUpdaterNode } from "~/components/Nodes";
import { ButtonEd, StraightEd } from "~/components/Edges";
import { Box } from "@mui/material";
import useFlowState from "~/Data/useFlowState";
import { ReactFlow, Background, Controls, BackgroundVariant } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

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
        flex: "1 1 auto",
        minWidth: 0,
        height: "100%",
        background: "#0A0A0A",
        overflow: "hidden",
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
        style={{ background: "#0A0A0A" }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          color="rgba(255,255,255,0.07)"
          gap={20}
          size={1}
        />
        <Controls
          style={{
            background: "rgba(18,18,18,0.90)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 8,
            boxShadow: "none",
          }}
        />
      </ReactFlow>
    </Box>
  );
}
