import { Button, ThemeProvider } from "@mui/material";
import theme from "../../theme";
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
    <ThemeProvider theme={theme}>
      <Button
        variant={variant}
        size={size}
        sx={{ backgroundColor: backgroundColor }}
        {...props}
      >
        {label}
      </Button>
    </ThemeProvider>
  );
};
export default LYCAButton;
