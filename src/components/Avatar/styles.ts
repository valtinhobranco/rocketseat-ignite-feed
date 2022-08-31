import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
  .avatar {
    box-sizing: initial;
    height: 5rem;
    width: 5rem;
    border-radius: ${variables.borderRadios};

    &.bordered {
      height: 4.8rem;
      width: 4.8rem;
      border: 4px solid ${variables.colors.gray800};
      outline: 2px solid ${variables.colors.green500};
    }
  }
`;
