import { ReactNode } from 'react'
import { StyledButton } from "./styles";

interface ButtonProps {
  icon?: ReactNode;
  title: string;
}

export const Button = ({ icon, title }: ButtonProps) => {
  return (
      <StyledButton>
        {icon} {title}
      </StyledButton>
  );
};
