import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {Icon} from 'react-native-elements';

import {useDispatch, useSelector} from 'react-redux';

export default function Header() {
  const navigation = useNavigation();
  const {colors} = useTheme();

  const dispatch = useDispatch();
  const currentTheme = useSelector(state => {
    return state.themeMode;
  });

  const toggleSwitch = () =>
    dispatch({type: 'CHANGE_tHEME', payload: !currentTheme});

  return (
    <View
      style={{
        height: 45,
        flexDirection: 'row',
        backgroundColor: colors.headerColor,
        justifyContent: 'space-between',
        elevation: 4,
      }}>
      <View style={{flexDirection: 'row', margin: 5}}>
        <Icon
          name="youtube"
          size={32}
          color="red"
          type="antdesign"
          style={{marginLeft: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            fontWeight: 'bold',
            marginLeft: 5,
            color: colors.iconColor,
          }}>
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: 150,
          margin: 5,
          alignItems: 'center',
        }}>
        <Icon
          type="FontAwesome"
          name="search"
          size={24}
          color={colors.iconColor}
          onPress={() => navigation.navigate('search')}
        />
        <Switch
          trackColor={{false: '#767577', true: '#7300ff'}}
          thumbColor={currentTheme ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={currentTheme}
        />
        <Icon
          type="ionicon"
          name={currentTheme ? 'md-moon' : 'md-sunny'}
          size={24}
          color={colors.toggleIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
