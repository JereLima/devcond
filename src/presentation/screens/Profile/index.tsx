import React from 'react';
import * as S from './styles';
import {
  ProfileScreenProps,
  RegisterScreenProps,
} from '../../../infra/navigation/types';
import MyHeader from '../../components/MyHeader';

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <S.Container>
      <MyHeader title="Inicio" />
    </S.Container>
  );
};

export default ProfileScreen;
