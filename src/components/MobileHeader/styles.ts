import styled from 'styled-components';
import { FiMessageSquare } from 'react-icons/fi';

export const Container = styled.div`
  background: var(--color-header);
  padding: 0 1.6rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  @media (min-width: 1180px) {
    display: none;
  }
`;

export const ProfileAvatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
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

export const MessageIcon = styled(FiMessageSquare)`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.4rem;
  color: var(--color-white);
  flex-shrink: 0;
  margin-left: 1.6rem;
`;
