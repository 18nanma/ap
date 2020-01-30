import React from 'react';
import { Text, View, ScrollView, Alert, Linking,Button } from 'react-native';
import { Header, Input, SearchBar,  } from 'react-native-elements';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Spinner, ListItem, Separator } from 'native-base';
import { Font } from 'expo';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('Milagro.db')

export default class Edit extends React.Component {
    state = {  room: '', ip: '', id: 0 };

  componentDidMount() {
    const id = this.props.navigation.getParam("id");
    this.setState({ id });
    this.fetch(id);

  }

  fetch(id) {
    var query = "SELECT * FROM tbl_ap WHERE id= ?";
    var params = [id];
    db.transaction((tx) => {
      tx.executeSql(query, params, (tx, results) => {
        console.log(results);
        if (results.rows._array.length > 0) {
          this.setState({
            room: results.rows._array[0]['room'],
            ip: results.rows._array[0]['ip'],
          });
        }

      }, function (tx, err) {
        Alert.alert("Warning", "An error has occured");
      });
    });
  }

  update(id, room, ip) {
    var query = "UPDATE tbl_ap SET room= ?, ip= ? WHERE id= ?";
    var params = [room, ip, id];
    db.transaction((tx) => {
      tx.executeSql(query, params, (tx, results) => {
        console.log(results);
        Alert.alert("Success", "Datos Actualizados correctamente");
      }, function (tx, err) {
        Alert.alert("Warning", "Room has not been updated");
        return;
      });
    });
  }

  handleSave() {
    const { room, ip, id } = this.state;
    if (room != 'room' && ip != 'ip') {
      this.update(id, room, ip);
    } else {
      Alert.alert("Warning", "Todos los campos deben estar llenos para actualizar el registro");
    }
  }
    handleBack() {
        this.props.navigation.navigate('Home');
    }
    render() {
        return (
            <View>
                <Header
                    placement="right"
                    leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => this.handleBack() }}
                    centerComponent={{ text: 'Edit', style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: '#2B2F33' }}
                    leftContainerStyle={{ marginLeft: 12 }}
                    centerContainerStyle={{ marginRight: 170 }}
                />
               <Input
                     onChangeText={(val) => this.setState({ room: val })} value={this.state.room}
                    placeholder='Room Name'
                    leftIconContainerStyle={{ marginRight: 15 }}
                    inputContainerStyle={{ marginTop: 45, width: 330, marginLeft: 30 }}
                />
                <Input
                      onChangeText={(val) => this.setState({ ip: val })} value={this.state.ip}
                    placeholder='IP Address'
                    leftIconContainerStyle={{ marginRight: 15 }}
                    inputContainerStyle={{ marginTop: 25, width: 330, marginLeft: 30 , marginBottom:20}}
                />
               
                <Button
                    onPress={() => {
                     this.handleSave();
                    }}
                    title="Save Information"
                />
                
            </View>
        );
    }
}
