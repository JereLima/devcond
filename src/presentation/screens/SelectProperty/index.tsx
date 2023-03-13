import React, {useState} from 'react';
import {FlatList} from 'react-native';
import * as S from './styles';
import {SelectPropertyProps} from '@src/infra/navigation/types';
import {IProperty, useAppStore} from '@src/infra/store/useAppStore';
import {
  MyButton,
  MyHeader,
  MyScreen,
  MySpacer,
} from '@src/presentation/components';
import MyText from '@src/presentation/components/MyText';

const SelectProperty: React.FC<SelectPropertyProps> = ({navigation, route}) => {
  const {properties} = useAppStore(state => state.user);
  const {name} = useAppStore(state => state.user);

  const {selectedProperty, setSelectedProperty} = useAppStore();

  const handleSelectProperty = (property: IProperty) => {
    setSelectedProperty(property);
  };

  const property = ({item}: {item: IProperty}) => {
    return (
      <S.CardProperty onPress={() => handleSelectProperty(item)}>
        <MyText>{item.name}</MyText>
      </S.CardProperty>
    );
  };

  return (
    <MyScreen>
      <MyHeader title="Selecione a Unidade" />
      <S.Content>
        <S.ContainerText>
          <MyText>Olá {name}!</MyText>
          {!selectedProperty.name ? (
            <MyText>Selecione um unidade para continuar</MyText>
          ) : (
            <MyText>Unidade selecionada: {selectedProperty.name}</MyText>
          )}
        </S.ContainerText>
        <MySpacer height={50} />
        <FlatList
          data={properties}
          renderItem={property}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={() => <MySpacer />}
        />
        {selectedProperty.name && <MyButton title="Fechar" />}
      </S.Content>
    </MyScreen>
  );
};

export default SelectProperty;
