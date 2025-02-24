import React, {useRef} from 'react';
import {Alert, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useDispatch} from 'react-redux';

const CustomWebView = () => {
  const webViewRef = useRef(null);
  // Function to handle messages from WebView
  const handleMessage = event => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.success) {
        // Update Redux state
        Alert.alert('Success', 'Login Successful!' + data);
      } else {
        // Update Redux state
        Alert.alert('Error', 'Login Failed.' + data.body);
      }
    } catch (error) {
      console.error('Error parsing WebView message:', error);
    }
  };

  // JavaScript to inject into WebView
  const injectedJavaScript = `
    document.forms[0].addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      let formData = new FormData(this);
      fetch(this.action, {
        method: this.method,
        body: formData,
        credentials: 'include'
      })
      .then(response => response.json())
      .then(data => {
        window.ReactNativeWebView.postMessage(JSON.stringify(data));
      })
      .catch(error => {
        window.ReactNativeWebView.postMessage(JSON.stringify({ success: false, error: error.message }));
      });
    });
  `;

  return (
    <View style={{flex: 1}}>
      <WebView
        ref={webViewRef}
        source={{uri: 'https://httpbin.org/forms/post'}} // Replace with actual URL
        style={{marginTop: 20}}
        injectedJavaScript={injectedJavaScript}
        onMessage={handleMessage}
      />
    </View>
  );
};

export default CustomWebView;
// https://github.com/react-native-webview/react-native-webview/blob/HEAD/docs/Getting-Started.md
// https://github.com/react-native-webview/react-native-webview/blob/a27d53f1ab7e2141a88a7304cb7ab5f212a8d6fd/docs/Guide.md#controlling-navigation-state-changes
// https://github.com/react-native-webview/react-native-webview/blob/a27d53f1ab7e2141a88a7304cb7ab5f212a8d6fd/docs/Reference.md#props-index
