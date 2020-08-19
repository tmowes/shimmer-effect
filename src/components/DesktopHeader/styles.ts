import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.header`
  background: var(--color-header);
  padding: 0 3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: none;
  @media (min-width: 1180px) {
    display: block;
  }
`;
export const Wrapper = styled.div`
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  max-width: 1128px;
  margin: 0 auto;
  .left,
  .right nav {
    display: flex;
    align-items: center;
  }
  .right nav {
    height: 100%;
  }
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 8rem;
    min-height: 100%;
    height: 100%;
    color: var(--color-icons);
    &:hover {
      color: var(--color-white);
    }
    &.active {
      padding: 1rem;
      border-bottom: 2px solid var(--color-white);
    }
  }
`;
const iconCSS = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const LinkedInIcon = styled(GrLinkedin)`
  width: 3.4rem;
  height: 3.4rem;
  color: var(--color-linkedin);
  background: var(--color-white);
  border-radius: 0.4rem;
  flex-shrink: 0;
`;
export const SearchInput = styled.input`
  margin-left: 1.6rem;
  width: 100%;
  background: var(--color-input);
  color: var(--color-black);
  font-size: 1.4rem;
  padding: 0.8rem;
  border: none;
  outline: none;
  border-radius: 0.2rem;
  &:focus {
    background: var(--color-white);
  }
`;

export const HomeIcon = styled(AiFillHome)`
  ${iconCSS}
`;
export const NotificationIcon = styled(AiOutlineBell)`
  ${iconCSS}
`;
export const ProfileAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;
export const CaretDownIcon = styled(AiFillCaretDown)`
  width: 1.6rem;
  height: 1.6rem;
`;
