import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  > span {
    margin-top: 4.8rem;
    display: flex;
  }
  @media (min-width: 1180px) {
    > main {
      margin: 0 3rem;
      display: flex;
      justify-content: center;
    }
    > span {
      margin-top: 5.6rem;
      padding: 0.8rem 0;
    }
  }
  .left-column,
  .right-column,
  .ad-banner {
    display: none;
  }
  @media (min-width: 1180px) {
    .left-column,
    .right-column,
    .ad-banner {
      display: unset;
    }
  }

  .middle-column {
    margin: 0 2.4rem 1.6rem;
  }
`;
