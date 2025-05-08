import { DefaultNode, TextUpdaterNode } from "./Nodes";
import { ButtonEd, StraightEd } from "./Edges";
import { Box, Button } from "@mui/material";
import Flowdata from "app/Data/Flowdata.json";
import useFlowState from "~/Data/useFlowState";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  DefaultNode: DefaultNode,
};

const edgeTypes = {
  StraightEd: StraightEd,
  ButtonEd: ButtonEd,
};

export default function Preview() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setEdges,
    setNodes,
  } = useFlowState();

  const Reset = () => {
    setNodes(Flowdata.Nodes);
    setEdges(Flowdata.Edges);
  };

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
          <Controls />
          <Background />
        </ReactFlow>
        <Button variant="contained" onClick={Reset} sx={{ mt: 1 }}>
          Reset
        </Button>
      </Box>
    </>
  );
}
