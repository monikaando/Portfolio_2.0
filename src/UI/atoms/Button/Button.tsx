import React, { FC, ReactElement } from "react";
import { StyledButton } from "./Button.sc";

export type ButtonProps = {
  color: "red" | "grey";
  text: string;
  link: string;
};
const Button: FC<ButtonProps> = ({
  color,
  text,
  link,
}: ButtonProps): ReactElement => {
  return (
    <StyledButton
      color={color}
      // href={link}
      // target="_blank"
      // rel="noopener noreferrer"
    >
      {text}
    </StyledButton>
  );
};
export default Button;
