import { ReactNode } from "react";
import IgniteLogo from "../../assets/images/svg/ignite-logo.svg";

//? styles
import * as Styles from "./styles";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <Styles.Container>
      <img src={IgniteLogo} alt="" />
      <strong>Ignite Feed</strong>
    </Styles.Container>
  );
}
