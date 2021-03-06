import React from 'react';

import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationIcon,
  ProfileAvatar,
  CaretDownIcon,
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className='left'>
          <LinkedInIcon />
          <SearchInput placeholder='Pesquisar' />
        </div>
        <div className='right'>
          <nav>
            <button className='active'>
              <HomeIcon />
              <span>Inicio</span>
            </button>
            <button>
              <NotificationIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileAvatar src='https://github.com/tmowes.png' />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
