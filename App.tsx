/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import {CardField, StripeProvider} from '@stripe/stripe-react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <StripeProvider
        publishableKey=""
        merchantIdentifier="merchant.identifier">
        <Text>Hello world</Text>
        <CardField
          postalCodeEnabled={false}
          cardStyle={{
            borderColor: 'gray',
            borderWidth: 2,
            borderRadius: 35,
            backgroundColor: 'white',
            fontSize: 30,
          }}
          style={{
            height: 52,
            width: '90%',
            padding: 20,
          }}
          onCardChange={cardDetails => {
            console.log(cardDetails);
          }}
        />
      </StripeProvider>
    </SafeAreaView>
  );
};

export default App;
