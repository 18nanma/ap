import React from 'react';
import { Text, View, Dimensions, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default class MetricsScreen extends React.Component {

  render() {
    return (
        <SafeAreaView>
            <ScrollView>
               <StatusBar hidden />
                <View style={styles.container}>
                    <LinearGradient
                    colors={['#242477',  '#21afd4']}
                    style={styles.linerGradient}>
                        <Text>Hello</Text>
                        <Text style={styles.title1}>Citriot</Text>
                        <Text style={styles.title}>Automation</Text> 
                    </LinearGradient>
                </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    title1:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#fff',
      fontSize: 50,
      fontWeight: 'bold',
      paddingTop: 100
 
    },
    title:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#fff',
      fontSize: 40,
      fontWeight: 'bold',
    },


    container:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
     },
     linerGradient: {
         height:height,
          width:width 
     },
     MainContainer:
    {
      paddingTop: 160,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
 
  textInput_Style:
  {
    width: '90%',
    height: 42,
    borderColor: '#009688',
    borderWidth: 1,
    backgroundColor: '#fff',
    textAlign:'center'
  },
  ip:{
    fontSize: 30,
    color: '#fff',
    paddingBottom : 20
  },
  buttonContainer:{
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40
  }
});
