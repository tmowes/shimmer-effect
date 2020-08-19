import styled from 'styled-components';

export const Container = styled.div`
  .row + .row {
    margin-top: 2.4rem;
  }
  .row {
    display: flex;
    align-items: center;
    .square-skeleton {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 0.4rem;
    }
    .column {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: 1.2rem;
      .row-skeleton {
        height: 1.2rem;
        border-radius: 0.4rem;
        &:nth-child(1) {
          width: 50%;
        }
        &:nth-child(2) {
          width: 100%;
          margin-top: 1rem;
        }
      }
    }
  }
`;
