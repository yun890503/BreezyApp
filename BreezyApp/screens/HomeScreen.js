import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import Swiper from 'react-native-deck-swiper';

const HomeScreen = ({ navigation }) => {
  const cards = [
    { id: 1, name: '甩頭鴿', image: '../BreezyApp/assets/甩頭鴿.jpg' },
    { id: 2, name: '另一個鴿', image: 'https://path_to_another_image.jpg' },
    
  ];

  const renderCard = (card) => (
    <Card>
      <Card.Title>{card.name}</Card.Title>
      <Card.Image source={{ uri: card.image }} />
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text h4>Home Screen</Text>
      <Swiper
        cards={cards}
        renderCard={renderCard}
        onSwipedLeft={(cardIndex) => console.log('不喜歡:', cards[cardIndex].name)}
        onSwipedRight={(cardIndex) => console.log('喜歡:', cards[cardIndex].name)}
        cardIndex={0}
        backgroundColor="#f2f2f2"
        stackSize={3}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
