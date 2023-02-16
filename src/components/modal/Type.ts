export interface Props {
  open: boolean;
  children: JSX.Element;
  onClose: () => void;
  handleSave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: "info" | "primary" | "error" | "warning" | "succes";
  className?: string;
  title?: string;
  textDialog?: boolean;
  primaryBtnTitle?: string;
  SeconderyBtnTitle?: string;
  primaryBtnTheme?: "info" | "primary" | "error" | "warning" | "succes";
  SeconderyBtnTheme?: "info" | "primary" | "error" | "warning" | "succes";
}
