import React from 'react';
import {ActivityIndicator} from 'react-native';
import {ProfileScreenProps} from '@src/infra/navigation/types';
import {MyButton, MyHeader, MyScreen} from '@src/presentation/components';
import {useLogout} from '@src/presentation/hooks/useLogout';

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const {handleLogout, loading} = useLogout();

  return (
    <MyScreen>
      <MyHeader title="Inicio" />
      <MyButton
        onPress={() => navigation.navigate('SelectProperty')}
        title="Sair"
      />
      {loading && <ActivityIndicator />}
    </MyScreen>
  );
};

export default ProfileScreen;
