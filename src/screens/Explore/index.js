import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Header';
import {Icon} from 'react-native-elements';
import Card from '../../components/Card';
import {KEY} from '../../../API';
import {useTheme} from '@react-navigation/native';

const Explore = () => {
  const [dataCard, setDataCard] = useState([]);
  const {colors} = useTheme();

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
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <Header />
      <View style={styles.wrappCategory}>
        <View style={styles.kotak}>
          <Icon name="fire" type="fontisto" size={28} />
          <Text style={styles.namaCategory}>Trending</Text>
        </View>
        <View style={styles.kotak}>
          <Icon name="music-note" type="fontisto" size={28} />
          <Text style={styles.namaCategory}>Musik</Text>
        </View>
        <View style={styles.kotak}>
          <Icon name="game-controller" type="entypo" size={28} />
          <Text style={styles.namaCategory}>Game</Text>
        </View>
        <View style={styles.kotak}>
          <Icon name="news" type="entypo" size={28} />
          <Text style={styles.namaCategory}>Berita</Text>
        </View>
      </View>

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

export default Explore;

const styles = StyleSheet.create({
  wrappCategory: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  kotak: {
    backgroundColor: 'white',
    padding: 10,
    width: 140,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  namaCategory: {
    marginLeft: 10,
    color: 'grey',
  },
});
