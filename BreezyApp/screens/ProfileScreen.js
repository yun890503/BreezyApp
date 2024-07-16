import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon, Avatar } from 'react-native-elements';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source={{ uri: './BreezyApp/assets/臭跩貓.jpg' }} 
        containerStyle={styles.avatar}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>

      <Button
        title="編輯資料"
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        icon={<Icon name="edit" type="font-awesome" color="#ffffff" />}
        containerStyle={styles.buttonContainer}
        onPress={() => console.log('Edit Profile Pressed')}
      />
      <Button
        title="登出"
        buttonStyle={[styles.button, styles.logoutButton]}
        titleStyle={styles.buttonText}
        icon={<Icon name="sign-out" type="font-awesome" color="#ffffff" />}
        containerStyle={styles.buttonContainer}
        onPress={() => console.log('Logout Pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  avatar: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#888',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ProfileScreen;
