import "../button.css";
import { Button } from "@mui/material";
interface ButtonProps {
  label: string;
  variant?: any;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  onClick?: () => void;
}
export const LYCAButton = ({
  size = "medium",
  backgroundColor,
  label,
  variant = "contained",
  ...props
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      sx={{ backgroundColor: backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  );
};
