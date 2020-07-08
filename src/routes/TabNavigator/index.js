import React from 'react';
import {Icon} from 'native-base';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

const TabNavigator = ({title, onPressed, onLongPressed, active}) => {
  const {colors} = useTheme();
  const Icons = () => {
    if (title === 'home') {
      return <Icon name="home" style={styles.iconActived(active, colors)} />;
    }

    if (title === 'explore') {
      return (
        <Icon
          name="explore"
          type="MaterialIcons"
          style={styles.iconActived(active, colors)}
        />
      );
    }

    if (title === 'profile') {
      return (
        <Icon
          name="account-circle"
          type="MaterialIcons"
          style={styles.iconActived(active, colors)}
        />
      );
    }

    return null;
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        vertical
        onPress={onPressed}
        onLongPress={onLongPressed}>
        <Icons />
        <Text style={styles.text(active, colors)}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active, colors) => ({
    fontSize: 12,
    marginTop: 4,
    color: active ? colors.tabIcon : 'grey',
  }),
  iconActived: (active, colors) => ({
    color: active ? colors.tabIcon : 'grey',
  }),
});
