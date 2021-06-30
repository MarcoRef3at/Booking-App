import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
// import WebViewBridge from 'react-native-webview-bridge';
const ScreenAuth = () => {
  //   const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;
  const redirectUri = "https://postman-echo.com/post";

  const onBridgeMessage = (webViewData) => {
    console.log("webViewData:", webViewData);
    let jsonData = JSON.parse(webViewData);

    if (jsonData.success) {
      Alert.alert(jsonData.message);
    }
    console.log("data received", webViewData, jsonData);
    //.. do some react native stuff when data is received
  };

  return (
    <WebView
      source={{
        uri: `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=cbe7edcb-98fa-4c1d-a5d1-a1b8927b1e9a&response_type=code&redirect_uri=${redirectUri}&response_mode=form_post&scope=offline_access%20user.read%20mail.read%20Bookings.ReadWrite.All`,
      }}
    />
  );
};

export default ScreenAuth;

const styles = StyleSheet.create({});
