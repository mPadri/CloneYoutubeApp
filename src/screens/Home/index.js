import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import {KEY} from '../../../API';

const Home = () => {
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=completed&maxResults=10&q=reactnative&regionCode=ID&type=video&key=${KEY}`,
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
      <Header />
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

export default Home;
