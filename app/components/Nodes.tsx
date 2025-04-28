import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";
import { Box, Button, Typography } from "@mui/material";

export function TextUpdaterNode({ data }: any) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <div className="p-3 bg-white border border-gray-800 rounded">
        <Handle type="target" position={Position.Top} />
        {/*Recieves connection*/}
        <div>
          <label htmlFor="text">Text:</label>
          <input
            id="text"
            name="text"
            onChange={onChange}
            className="nodrag border-2 rounded-2xl w-28"
          />
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
        {/*Gives connection*/}
        <Handle
          style={{ left: 10 }}
          type="source"
          position={Position.Bottom}
          id="b"
        />
      </div>
    </>
  );
}

//Default Node
export function DefaultNode({ data }: any) {
  return (
    <Box>
      {/* Input/Output Handles */}
      <Handle type="target" position={Position.Top} />

      {/* Node Content */}
      <Typography variant="h6">{data?.label ?? ""}</Typography>

      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {}}
      >
        {data?.Name ?? ""}
      </Button>

      {/* Output Handle */}
      <Handle type="source" position={Position.Bottom} />
    </Box>
  );
}
