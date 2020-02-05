import React from 'react';
import { Text, View, Dimensions, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';

const { width, height } = Dimensions.get('window');
const h = 0.2 * height;

export default class InfoScreen extends React.Component {

  render() {
    return (
        <SafeAreaView>
            <ScrollView>
               <StatusBar hidden />
                <View style={styles.container}>
                    <LinearGradient
                    colors={['#242477',  '#21afd4']}
                    style={styles.linerGradient}>

                    </LinearGradient>

                        <Text style={styles.title}>Auto Power</Text>
                        <Text style={styles.title1}>Features </Text> 

                        <View style={{flexDirection: 'row'}}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.bulletText}>Can connect up to 20 devices with a single module</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.bulletText}>Custom built mobile application for android</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.bulletText}>Capable of generating an electricity consumption report</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.bulletText}>Easy plug and play architecture and Ergonomic design</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.bulletText}>Real time current monitoring system through the mobile application</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.bulletText}>Multiple user operation through their android devices</Text>
                      </View>

                    <Text style={styles.quotes}>"Thank you for helping us in reducing your carbon footprint,
                          which is your contribution to a better environment”</Text>

                          <Text style={styles.title1}>Contact Us </Text> 
                          <Text style={styles.lead}>Sales &
                              Marketing Lead</Text> 
                              <Text style={styles.leadDetails}> Shanthilal K</Text> 
                          <Text style={styles.leadDetails}>+91 9900306030</Text> 
                          <Text style={styles.leadDetails}>shanthilal@citriot.com</Text> 
                    <View style={{paddingBottom: 30}} />
                    <Text style={styles.lead}>Technical Lead</Text> 
                              <Text style={styles.leadDetails}>Syed Farhan Ahmad </Text> 
                          <Text style={styles.leadDetails}>+91 8660902359</Text> 
                          <Text style={styles.leadDetails}>farhan@citriot.com</Text> 
                    <View style={{paddingBottom: 30}} />

                    <View style={styles.helpContainer}>
                        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
                            <Text style={styles.helpLinkText}>
                            https://www.citriot.com/
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingBottom: 30}} />
                </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
      'https://www.citriot.com/'
    );
  }

const styles = StyleSheet.create({
  title:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
  title1:{
    display: 'flex',
    textAlign: 'left',
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 20
  },
  bullet: {
    color: 'black',
    paddingLeft: 5,
    fontSize: 18
  },

  bulletText: {
    color: 'black',
    flex: 1, 
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  quotes:{
    color: 'black',
    fontSize: 18,
    fontWeight : 'bold',
    paddingTop: 30,
    paddingLeft: 2,
    paddingRight: 2,
    justifyContent: 'center',
    textAlign: 'center'
  },
  container:{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
   },
   linerGradient: {
       height:h,
        width:width 
   },
   lead:{
     color: 'black',
     fontSize: 18,
     fontWeight: 'bold',
     textAlign:'left',
   },
   leadDetails:{
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'left',
   },
   helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 16,
    color: '#242477',
  },

});