import { Button, Typography } from "@mui/material";
import {
  BaseEdge,
  getStraightPath,
  EdgeLabelRenderer,
  useReactFlow,
} from "@xyflow/react";

//StraightEd
export function StraightEd({ id, sourceX, sourceY, targetX, targetY }: any) {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return <BaseEdge id={id} path={edgePath} />;
}

//ButtonEd
export function ButtonEd({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  data,
}: any) {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          className="nodrag nopan size-5"
          onClick={() => {
            setEdges((es) => es.filter((e) => e.id !== id));
          }}
        >
          <Typography fontSize="6px">{data?.label ?? ""}</Typography>
        </Button>
      </EdgeLabelRenderer>
    </>
  );
}
