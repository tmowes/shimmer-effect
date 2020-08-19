import styled from 'styled-components';

export const Container = styled.div`
  > div {
    padding: 4rem 4rem 4rem 1.2rem;
    display: flex;
    flex-direction: column;
    .row-skeleton {
      height: 1.2rem;
      border-radius: 0.4rem;
      &:nth-child(1) {
        width: 100%;
      }
      &:nth-child(2) {
        width: 90%;
        margin-top: 2rem;
      }
    }
  }
`;
