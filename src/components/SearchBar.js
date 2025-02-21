import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return <View style={styles.backgroundStyle}>
    <Feather name="search" style={styles.iconStyle} />
    <TextInput
      placeholder="Search"
      style={styles.inputStyle}
      value={term}
      onChangeText={onTermChange}
      autoCapitalize="none"
      autoCorrect={false}
      onEndEditing={onTermSubmit}
    />
  </View>;
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    marginHorizontal: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    marginTop: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  }
});