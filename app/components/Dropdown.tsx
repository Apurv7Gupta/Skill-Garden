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
          fontSize: "0.75rem",
          cursor: "pointer",
          color: "rgba(255,255,255,0.45)",
          userSelect: "none",
          display: "inline-flex",
          alignItems: "center",
          transition: "color 100ms ease-out",
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
        PaperProps={{
          sx: {
            background: "rgba(18,18,18,0.95)",
            backdropFilter: "blur(12px) saturate(150%)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "8px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
            minWidth: 160,
            mt: 0.5,
          },
        }}
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
            sx={{
              fontSize: "0.875rem",
              fontWeight: isTitle ? 500 : 400,
              color: isTitle
                ? "rgba(255,255,255,0.90)"
                : "rgba(255,255,255,0.65)",
              borderBottom: isTitle
                ? "1px solid rgba(255,255,255,0.08)"
                : "none",
              borderRadius: isTitle ? "0" : "6px",
              mx: isTitle ? 0 : "4px",
              my: isTitle ? 0 : "2px",
              px: 2,
              py: "6px",
              minHeight: 36,
              pointerEvents: isTitle ? "none" : "auto",
              transition: "all 100ms ease-out",
              "&:hover": {
                background: isTitle
                  ? "transparent"
                  : "rgba(255,255,255,0.06)",
                color: isTitle ? "rgba(255,255,255,0.90)" : "rgba(255,255,255,0.95)",
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
