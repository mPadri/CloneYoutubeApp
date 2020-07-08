import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('signin');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CloneYoutube</Text>
      <Icon name="youtube" size={64} color="red" type="antdesign" />
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
  },
});
