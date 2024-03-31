import { Typography } from "@mui/material";
import withThemeProvider from "../WithTheme";
interface Props {
  text: string;
  variant?: any;
}
const LYCAText = ({ text, variant, ...props }: Props) => {
  return (
      <Typography variant={variant} {...props}>
        {text}
      </Typography>
  );
};
export default withThemeProvider(LYCAText);
