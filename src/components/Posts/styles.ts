import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.article`
  background: ${variables.colors.gray800};
  border-radius: ${variables.borderRadios};
  overflow: hidden;
  padding: 4rem;

  .author-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .author {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      .avatar {
        box-sizing: initial;
        height: 4.8rem;
        width: 4.8rem;
        border-radius: ${variables.borderRadios};
        border: 4px solid ${variables.colors.gray800};
        outline: 2px solid ${variables.colors.green500};
      }

      .author-info {
        display: flex;
        flex-direction: column;

        strong {
          color: ${variables.colors.gray100};
          line-height: 1.6;
        }

        span {
          font-size: 1.4rem;
          line-height: 1.6;
          color: ${variables.colors.gray400};
        }
      }
    }

    time {
      font-size: 1.4rem;
      color: ${variables.colors.gray400};
    }
  }

  > .content {
    border-bottom: 1px solid ${variables.colors.gray600};
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 2.4rem 0;
    color: ${variables.colors.gray300};
    p {
      line-height: 1.6;
      a {
        text-decoration: none;
        color: ${variables.colors.green500};
        font-weight: bold;
        transition: ${variables.transitions};
        &:hover {
          color: ${variables.colors.green300};
        }
      }
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 0 0;
  gap: 2.4rem;

  h1 {
    color: ${variables.colors.gray100};
  }

  .comments-area {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    textarea {
      background: ${variables.colors.gray900};
      height: 9.6rem;
      border-radius: ${variables.borderRadios};
      border: 0;
      resize: none;
      padding: 1.3rem 1.6rem;
      color: ${variables.colors.white};

      &:focus-visible {
        outline: ${variables.colors.green300} solid 1px;
        box-sizing: border-box;
        border: none;
      }
    }

    footer {
      visibility: hidden;
      max-height: 0;
    }

    &:focus-within {
      footer {
        visibility: visible;
        max-height: none;
      }
    }

    button {
      padding: 1.6rem 2.4rem;
      cursor: pointer;
      background: ${variables.colors.green500};
      color: ${variables.colors.white};
      border-radius: ${variables.borderRadios};
      transition: ${variables.transitions};
      &:hover {
        background: ${variables.colors.green300};
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        &:hover {
          background: ${variables.colors.green500};
        }
      }
    }
  }
`;
