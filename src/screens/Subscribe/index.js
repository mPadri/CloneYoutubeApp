import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

const Subscribe = () => {
  const {colors} = useTheme();
  const textColor = colors.iconColor;
  const currentUser = useSelector(state => {
    return state.setUser;
  });
  // console.log('ini user: ', currentUser);
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header />
      <View style={styles.wrapper}>
        <Image
          source={{uri: currentUser.photo}}
          style={{width: 150, height: 150, borderRadius: 100}}
        />
        <Text style={{fontSize: 24, marginVertical: 5, color: textColor}}>
          {currentUser.name}
        </Text>
        <Text style={{color: textColor}}>{currentUser.email}</Text>
      </View>
    </View>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
