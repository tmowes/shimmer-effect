import styled from 'styled-components';

export const Container = styled.div`
  > div {
    .bg-skeleton {
      width: 100%;
      height: 7rem;
      filter: brightness(96%);
    }
    span {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-bottom: 17.5rem;
      .avatar-skeleton {
        z-index: 1;
        width: 7.2rem;
        height: 7.2rem;
        border-radius: 50%;
        margin: -3.6rem 0 1rem;
      }
      .row-skeleton {
        height: 1.2rem;
        border-radius: 0.4rem;
        &:nth-child(2) {
          width: 60%;
        }
        &:nth-child(3) {
          width: 50%;
          margin-top: 1rem;
        }
      }
    }
  }
`;
