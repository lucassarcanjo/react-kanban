import { Button } from "./IconButton.styles";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  ...rest
}) => {
  return <Button {...rest}>{children}</Button>;
};
