import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const LiveVideoScreen = ({navigation}) => {
  const completeVisit = () => {
    navigation.replace('ReportScreen');
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
            This is the live Video Screen
          </Text>
        </View>
        <Text
              onPress={completeVisit}>
            Redirect to report page
          </Text>
      </View>
    </SafeAreaView>
  );
};

export default LiveVideoScreen;