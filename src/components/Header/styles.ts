import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background: ${variables.colors.gray800};
  img {
    height: 3rem;
  }
  strong {
    font-size: 3rem;
    margin-left: 1rem;
  }
`;
