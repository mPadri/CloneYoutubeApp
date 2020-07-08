import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation, useTheme} from '@react-navigation/native';

const Card = ({videoId, title, channel}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const textColor = colors.iconColor;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('videoplayer', {
          videoId,
          title,
          channel,
        })
      }>
      <View style={{marginBottom: 10}}>
        <Image
          style={{width: '100%', height: 200}}
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
        />

        <View style={{flexDirection: 'row', margin: 5}}>
          <Icon
            type="MaterialIcons"
            name="account-circle"
            size={40}
            color={textColor}
          />
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontSize: 16,
                width: Dimensions.get('screen').width - 50,
                color: textColor,
              }}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {title}
            </Text>
            <Text style={{fontSize: 12, color: 'grey'}}>{channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
