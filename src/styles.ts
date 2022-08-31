import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  max-width: 112rem;
  margin: 3.2rem auto;
  padding: 0 1.6rem;

  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 3.2rem;
  align-items: flex-start;
  main {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
