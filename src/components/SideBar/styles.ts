import styled from "styled-components";
import variables from "../../styles/variables";

export const Aside = styled.div`
  background: ${variables.colors.gray800};
  border-radius: ${variables.borderRadios};
  overflow: hidden;
  .cover {
    width: 100%;
    height: 72px;
    object-fit: cover;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -2.4rem;

  strong {
    margin-top: 1.6rem;
    color: ${variables.colors.gray100};
    line-height: 1.6;
  }

  span {
    font-size: 1.4rem;
    color: ${variables.colors.gray400};
    line-height: 1.6;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid ${variables.colors.gray600};
  margin-top: 2rem;
  padding: 2.4rem 3.4rem 3.4rem 3.4rem;
  a {
    background: transparent;
    color: ${variables.colors.green500};
    text-decoration: none;
    padding: 1.4rem 2.4rem;
    border-radius: ${variables.borderRadios};
    border: 1px solid ${variables.colors.green500};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: ${variables.transitions};
    gap: 1.2rem;
    &:hover {
      background: ${variables.colors.green500};
      color: ${variables.colors.white};
    }
  }
`;
