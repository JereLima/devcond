import React from 'react';
import {MyHeader, MyScreen} from '@src/presentation/components';
import {ProfileScreenProps} from '@src/infra/navigation/types';
import {useAppStore} from '@src/infra/store/useAppStore';

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <MyScreen>
      <MyHeader title="Inicio" />
    </MyScreen>
  );
};

export default ProfileScreen;
