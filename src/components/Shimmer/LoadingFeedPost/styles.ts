import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.8rem;
  @media (min-width: 1180px) {
    margin-top: 1.6rem;
  }
  > div {
    padding: 1.6rem 4rem 5rem 1.2rem;
    header {
      display: flex;
      .avatar-skeleton {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .column {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        padding-left: 1.6rem;
      }
      .row-skeleton {
        height: 1.2rem;
        border-radius: 0.4rem;
        &:nth-child(1) {
          width: 30%;
        }
        &:nth-child(2) {
          width: 55%;
          margin-top: 1rem;
        }
      }
    }
    span {
      display: flex;
      flex-direction: column;
      margin-top: 3.6rem;
      .row-skeleton {
        height: 1.2rem;
        border-radius: 0.4rem;
        &:nth-child(1) {
          width: 100%;
        }
        &:nth-child(2) {
          width: 90%;
          margin-top: 1rem;
        }
      }
    }
  }
`;
