export interface Props {
  title: string;
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  theme?: "info" | "primary" | "error" | "warning" | "succes";
  name: string;
  type?: "button" | "submit" | "reset";
}
