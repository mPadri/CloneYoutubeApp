import React, {useState} from 'react';
import {ActivityIndicator, TextInput, View, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {KEY} from '../../../API';
import MiniCard from '../../components/MiniCard';
import {useTheme} from '@react-navigation/native';

const Search = ({navigation}) => {
  const [value, setValue] = useState('');
  const [miniCardData, setMiniCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {colors} = useTheme();

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=completed&maxResults=10&q=${value}&regionCode=ID&type=video&key=${KEY}`,
    )
      .then(res => res.json())
      .then(res => {
        // console.log(res.items);
        setMiniCardData(res.items);
        setLoading(false);
        setValue('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: colors.headerColor,
          elevation: 4,
        }}>
        <Icon
          color={colors.iconColor}
          name="md-arrow-back"
          type="ionicon"
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{
            width: '70%',
            backgroundColor: '#e6e6e6',
            height: '80%',
            borderRadius: 4,
          }}
          value={value}
          onChangeText={value => setValue(value)}
        />
        <Icon
          name="md-send"
          color={colors.iconColor}
          type="ionicon"
          onPress={() => fetchData()}
        />
      </View>
      {loading && (
        <ActivityIndicator
          size="large"
          color="red"
          style={{marginTop: '50%'}}
        />
      )}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={miniCardData}
        keyExtractor={item => item.id.videoId}
        renderItem={({item}) => {
          return (
            <MiniCard
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

export default Search;
