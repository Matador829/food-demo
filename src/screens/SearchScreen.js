import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

    const [term, setTerm] = useState('');

  return <View style={styles.backgroundStyle}>
    <SearchBar
      term={term}
      onTermChange={(newTerm) => setTerm(newTerm)}
      onTermSubmit={() => console.log('done')}
    />
    <Text>We have entered: {term}</Text>
  </View>;
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'white',
        flex: 1,
    },
});

export default SearchScreen;
