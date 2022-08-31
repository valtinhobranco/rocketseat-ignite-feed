import { ReactNode } from "react";

import { Container } from "./styles";

interface AvatarProps {
  src: string;
  hasBordered?: boolean;
}

export function Avatar({ src, hasBordered }: AvatarProps) {
  return (
    <Container>
      {!hasBordered ? (
        <img className="avatar" src={src} />
      ) : (
        <img className="avatar bordered" src={src} />
      )}
    </Container>
  );
}
