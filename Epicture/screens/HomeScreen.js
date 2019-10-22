import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image, StatusBar } from 'react-native';

import Gallery from '../api/Gallery'
import Loading from '../components/Loading'
import SmallImage from '../components/SmallImage';

const data = [
  { key: 'https://i.imgur.com/e7Ps1jN.jpg' },
  { key: 'https://i.imgur.com/rpOZdJU.jpg' },
  { key: 'https://i.imgur.com/l4G7mK2.jpg' },
  { key: 'https://i.imgur.com/P8UwIb6.jpg' }
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 1;
export default class HomeScreen extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <SmallImage imageUri={item.key}/>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
} 

HomeScreen.navigationOptions = {
  title: 'Home'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});