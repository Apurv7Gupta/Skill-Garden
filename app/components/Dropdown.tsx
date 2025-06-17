import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

type DropdownArrowMenuProps = {
  options: {
    label: string;
    action: () => void;
    disabled?: boolean;
    isTitle?: boolean;
  }[];
};

export default function Dropdown({ options }: DropdownArrowMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    anchorEl?.focus();
    setAnchorEl(null);
  };

  return (
    <>
      <span
        onClick={handleClick}
        style={{
          fontSize: "14px",
          cursor: "pointer",
          lineHeight: 1,
          display: "inline-block",
          userSelect: "none",
          color: "green",
        }}
        aria-controls={open ? "dropdown-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        ▼
      </span>

      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        disableAutoFocusItem
      >
        {options.map(({ label, action, disabled, isTitle }, i) => (
          <MenuItem
            key={i}
            onClick={() => {
              if (!isTitle) {
                handleClose();
                action();
              }
            }}
            disabled={isTitle}
            style={{
              fontWeight: isTitle ? "bold" : 500,
              color: isTitle ? "#000" : "#1976d2", // match MUI primary
              borderBottom: isTitle ? "1px solid #ccc" : "none",
              borderRadius: "4px",
              margin: "4px 8px",
              padding: "6px 16px",
              textTransform: "none",
              justifyContent: "center",
              pointerEvents: isTitle ? "none" : "auto",
              transition: "background 0.2s ease-in-out",
            }}
            sx={{
              "&:hover": {
                backgroundColor: isTitle ? "inherit" : "#e3f2fd", // light MUI hover
              },
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
