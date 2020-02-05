import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Add from '../screens/Add';
import Edit from '../screens/Edit';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
      
      <AppContainer />

      </ScrollView>
    </View>
  );
}

const AppSwitchNavigator = createSwitchNavigator({
  Home: { screen: Home },
  Edit: { screen: Edit },
  Add: { screen: Add },
});

const AppContainer = createAppContainer(AppSwitchNavigator);

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 0,
  },
});
