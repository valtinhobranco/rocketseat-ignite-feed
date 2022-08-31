import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: flex-start;
  margin-top: 1.6rem;
  gap: 1.6rem;

  .content {
    flex: 1;
    .comments-container {
      padding: 1.6rem 1.6rem 2.5rem 1.6rem;
      min-height: 12rem;
      border-radius: ${variables.borderRadios};
      background: ${variables.colors.gray700};
      .comments-content {
        display: flex;
        justify-content: space-between;

        flex-direction: column;
        gap: 1.6rem;
        header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          .avatar-name {
            display: flex;
            flex-direction: column;
            strong {
              line-height: 1.6;
              span {
                color: ${variables.colors.gray400};
              }
            }
            time {
              font-size: 1.4rem;
              line-height: 1.7;
              color: ${variables.colors.gray400};
            }
          }

          .remove {
            color: ${variables.colors.gray800};
            transition: ${variables.transitions};
            cursor: pointer;
            line-height: 0;
            border-radius: 2px;
            &:hover {
              color: ${variables.colors.red500};
            }
          }
        }

        p {
          color: ${variables.colors.gray300};
        }
      }
    }

    .like-content {
      display: flex;
      align-items: center;
      background: none;
      color: ${variables.colors.gray300};
      margin-top: 1rem;
      gap: 1rem;
      transition: ${variables.transitions};
      cursor: pointer;
      > strong {
        font-size: 1.4rem;
        > span {
          font-size: 1.4rem;
        }
      }

      &:hover {
        color: ${variables.colors.green300};
      }
    }
  }
`;
