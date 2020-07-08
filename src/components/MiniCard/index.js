import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

const MiniCard = ({videoId, title, channel}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const textColor = colors.iconColor;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('videoplayer', {videoId, title})}>
      <View style={{flexDirection: 'row', margin: 10, marginBottom: 5}}>
        <Image
          style={{width: '45%', height: 100}}
          source={{uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}}
        />

        <View style={{paddingLeft: 10}}>
          <Text
            style={{
              fontSize: 16,
              width: Dimensions.get('screen').width / 2,
              color: textColor,
            }}
            ellipsizeMode="tail"
            numberOfLines={3}>
            {title}
          </Text>
          <Text style={{fontSize: 12, color: 'grey'}}>{channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniCard;
