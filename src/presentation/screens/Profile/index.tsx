import React from 'react';
import {ProfileScreenProps} from '../../../infra/navigation/types';
import MyHeader from '../../components/MyHeader';
import * as S from './styles';

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <S.Container>
      <MyHeader title="Inicio" />
    </S.Container>
  );
};

export default ProfileScreen;
