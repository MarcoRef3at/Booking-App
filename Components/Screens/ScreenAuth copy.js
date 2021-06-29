import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { openAuthSession } from 'azure-ad-graph-expo';

export default class ScreenAuth extends React.Component {
  state = {
    result: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title='Login' onPress={this._handlePressAsync} />
        {this.state.result ? (
          <Text>{JSON.stringify(this.state.result)}</Text>
        ) : (
          <Text>Nothing to see here.</Text>
        )}
      </View>
    );
  }

  _handlePressAsync = async () => {
    console.log('AuthSession:', AuthSession.makeRedirectUri);
    let result = await openAuthSession(azureAdAppProps);
    this.setState({ result });
  };
}

const azureAdAppProps = {
  clientId: 'cbe7edcb-98fa-4c1d-a5d1-a1b8927b1e9a',
  tenantId: 'common',
  //   scope: 'offline_access%20user.read%20mail.read%20Bookings.ReadWrite.All',
  scope: 'openid',
  redirectUrl: 'https://postman-echo.com/get',
  //   redirectUrl: AuthSession.makeRedirectUri(),
  //   clientSecret: '3VYSQhi86A~S2u.9_KIY9-vMXGTArUYVd5',
  //   domainHint: 'api://cbe7edcb-98fa-4c1d-a5d1-a1b8927b1e9a',
  prompt: 'login',
};
// 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=cbe7edcb-98fa-4c1d-a5d1-a1b8927b1e9a&response_type=code&redirect_uri=https://www.google.com&response_mode=form_post&scope=offline_access%20user.read%20mail.read%20Bookings.ReadWrite.All'

('auth.expo.io/@marcoref3at/Booking-App/start?authUrl=https%3A%2F%2Flogin.microsoftonline.com%2Fcommon%2Foauth2%2Fv2.0%2Fauthorize%3Fclient_id%3Dcbe7edcb-98fa-4c1d-a5d1-a1b8927b1e9a%26response_type%3Dcode%26scope%3Dopenid%253Dtruenull%26prompt%3Dlogin%26redirect_uri%3Dhttps%253A%252F%252Fpostman-echo.com%252Fget&returnUrl=exp%3A%2F%2F192.168.1.9%3A19000');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
