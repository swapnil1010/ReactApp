import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const ReportScreen = ({navigation}) => {
  const backToLogin = () => {
    navigation.replace('Auth');
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is the Report Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
        </Text>
        <Text
              onPress={backToLogin}>
              back to login
          </Text>
      </View>
    </SafeAreaView>
  );
};

export default ReportScreen;