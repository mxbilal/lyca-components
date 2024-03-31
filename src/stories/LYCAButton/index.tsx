import { Button } from "@mui/material";
import withThemeProvider from "../WithTheme";
interface ButtonProps {
  label: string;
  variant?: any;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  onClick?: () => void;
}
const LYCAButton = ({
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
export default withThemeProvider(LYCAButton);
