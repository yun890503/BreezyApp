import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Breezy_logo_cropped.png')} style={styles.logo} />

      <Text style={styles.subtitle}>已累積 16,497,018,449 次配對</Text>

      <Button
        title="手機號碼登入"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        icon={<Icon name="phone" type="font-awesome" color="#333" />}
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="使用 Facebook 登入"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        icon={<Icon name="facebook" type="font-awesome" color="#333" />}
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="使用 Apple 登入"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        icon={<Icon name="apple" type="font-awesome" color="#333" />}
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="WeChat 登入"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        icon={<Icon name="wechat" type="font-awesome" color="#333" />}
        onPress={() => navigation.navigate('Home')}
      />

      <Text style={styles.footerText}>
        我已閱讀並同意探探的{' '}
        <Text style={styles.link}>用戶協議</Text> 和 <Text style={styles.link}>隱私政策</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A7C3CA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    marginTop: 20,
    textAlign: 'center',
  },
  link: {
    color: '#FF6F61',
  },
});

export default LoginScreen;
