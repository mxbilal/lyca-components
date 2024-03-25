import { Typography } from "@mui/material";
interface TextProps {
  text: string;
  variant?: any;
}
export const LYCAText = ({ text, variant, ...props }: TextProps) => {
  return (
    <Typography variant={variant} {...props}>
      {text}
    </Typography>
  );
};
