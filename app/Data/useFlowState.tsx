import { useState, useCallback } from "react";
import { applyNodeChanges, applyEdgeChanges, addEdge } from "@xyflow/react";
import Flowdata from "./Flowdata.json";

export default function useFlowState() {
  const [nodes, setNodes] = useState(Flowdata.Nodes);
  const [edges, setEdges] = useState(Flowdata.Edges);

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

  return {
    nodes,
    setNodes,
    edges,
    setEdges,
    onNodesChange,
    onEdgesChange,
    onConnect,
  };
}
