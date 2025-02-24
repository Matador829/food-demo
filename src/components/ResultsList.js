import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ResultsList = ({ title, results }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return <View style={styles.result}>
                    <Image source={{ uri: item.image_url }} style={styles.image} />
                    <Text style={styles.name}>{item.name}</Text>
                </View>;
            }}
        />
    </View>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        marginBottom: 10,
    },
    name: {
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 5,
        padding: 5,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
        borderWidth: 1,
    },
    result: {
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 5,
        padding: 5,
    }
});

export default ResultsList;
