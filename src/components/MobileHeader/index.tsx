import React from 'react';

import { Container, ProfileAvatar, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileAvatar src='https://github.com/tmowes.png' />
      <SearchInput placeholder='Pesquisar' />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
