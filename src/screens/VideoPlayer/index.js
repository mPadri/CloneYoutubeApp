import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, FlatList} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation, useTheme} from '@react-navigation/native';
import Card from '../../components/Card';
import {KEY} from '../../../API';

const VideoPlayer = ({route}) => {
  const {videoId, title, channel} = route.params;
  const {colors} = useTheme();
  const textColor = colors.iconColor;

  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=completed&maxResults=10&q=${title}&regionCode=ID&type=video&key=${KEY}`,
    )
      .then(res => res.json())
      .then(res => {
        // console.log(res.items);
        setDataCard(res.items);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%', height: 200}}>
        <WebView
          domStorageEnabled={true}
          javaScriptEnabled={true}
          source={{uri: `https://www.youtube.com/embed/${videoId}`}}
        />
      </View>
      <View style={{borderColor: textColor, height: 10}} />
      <View style={{backgroundColor: colors.headerColor}}>
        <Text
          style={{
            fontSize: 20,
            width: Dimensions.get('screen').width - 50,
            margin: 9,
            marginBottom: 4,
            color: textColor,
          }}
          numberOfLines={2}
          ellipsizeMode="tail">
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: 'grey',
            fontWeight: 'bold',
            marginLeft: 9,
            marginBottom: 5,
          }}>
          {channel}
        </Text>
      </View>

      <View style={{borderColor: textColor, height: 10}} />
      <FlatList
        data={dataCard}
        keyExtractor={item => item.id.videoId}
        renderItem={({item}) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
      />
    </View>
  );
};

export default VideoPlayer;
