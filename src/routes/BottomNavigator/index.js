import React from 'react';
import {StyleSheet, View} from 'react-native';
import TabNavigator from '../TabNavigator';
import {useTheme} from '@react-navigation/native';

const BottomNavigator = ({state, descriptors, navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container(colors)}>
      {/* default dari dokumentasi */}
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // -----------end default dokumentasi-----------

        return (
          <TabNavigator
            key={index}
            onPressed={onPress}
            active={isFocused}
            onLongPressed={onLongPress}
            title={label}
          />
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: colors => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 53,
    paddingVertical: 12,
    backgroundColor: colors.headerColor,
  }),
});
