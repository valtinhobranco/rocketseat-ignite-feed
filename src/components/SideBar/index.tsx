import { ReactNode } from "react";

//? styles
import * as Styles from "./styles";

//? images
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

interface SideBarProps {
  children?: ReactNode;
}

export function SideBar({ children }: SideBarProps) {
  return (
    <Styles.Aside>
      <img
        className="cover"
        src="https://images.unsplash.com/photo-1660665416754-e0c780103b3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />
      <Styles.Profile>
        <Avatar
          src="https://avatars.githubusercontent.com/u/45143981?v=4"
          hasBordered
        />
        <strong>Valter</strong>
        <span>Web Developer</span>
      </Styles.Profile>

      <Styles.Footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </Styles.Footer>
    </Styles.Aside>
  );
}
