import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');

    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    const formatTime = (time) => {
        const hour = parseInt(time.slice(0, 2));
        const minutes = time.slice(2);
        if (hour === 0) return `12:${minutes} AM`;
        if (hour < 12) return `${hour}:${minutes} AM`;
        if (hour === 12) return `12:${minutes} PM`;
        return `${hour - 12}:${minutes} PM`;
    };

    return <View>
        <Text style={styles.title}>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image source={{ uri: item }} style={styles.image} />;
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
        <View style={styles.location}>
            <Text style={styles.address1}>{result.location.address1}</Text>
            <Text style={styles.city}>{result.location.city} {result.location.state} {result.location.zip_code}</Text>
        </View>
        <Text style={styles.hours}>Hours</Text>
        <Text style={styles.hoursText}>{formatTime(result.hours[0].open[0].start)} - {formatTime(result.hours[0].open[0].end)}</Text>
        <Text style={styles.price}>Price</Text>
        <Text style={styles.priceText}>{result.price}</Text>
        <Text style={styles.rating}>Rating</Text>
        <Text style={styles.ratingText}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>;
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        borderRadius: 4,
        marginBottom: 5,
        marginLeft: 15,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    address1: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
        color: 'gray',
    },
    address2: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
        color: 'gray',
    },
    city: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
        color: 'gray',
    },
    state: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
        color: 'gray',
    },
    zip_code: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
        color: 'gray',
    },
    country: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
        color: 'gray',
    },
    hours: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    hoursText: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    priceText: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
    },
    rating: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    ratingText: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
    },  

});

export default ResultsShowScreen;