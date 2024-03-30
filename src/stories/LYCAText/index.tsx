import { ThemeProvider, Typography } from "@mui/material";
import theme from "../../theme";
interface Props {
  text: string;
  variant?: any;
}
const LYCAText = ({ text, variant, ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} {...props}>
        {text}
      </Typography>
    </ThemeProvider>
  );
};
export default LYCAText;
