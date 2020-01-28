import React from 'react';
import { Text, View, ScrollView, Alert, Linking,Button } from 'react-native';
import { Header, Input, SearchBar,  } from 'react-native-elements';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Spinner, ListItem, Separator } from 'native-base';
import { Font, SQLite } from 'expo';

const db = SQLite.openDatabase('autopower1.db')

export default class Add extends React.Component {

  
    state = { room: '' }
    state = { ip: '' }

  
    insert(room, ip) {
        var query = "INSERT INTO tbl_ap (id,room,ip) VALUES (null,?,?)";
        var params = [room, ip];
        db.transaction((tx) => {
            tx.executeSql(query, params, (tx, results) => {
                console.log(results);
                Alert.alert("Success", "Ha sido Guardado Correctamente");
            }, function (tx, err) {
                Alert.alert("Warning", "Vefique que los campos esten llenos");
                return;
            });
        });
    }
    handleSave() {
        const { room } = this.state;
        const { ip } = this.state;

        if (room != "" && ip != "") {
            this.insert(room, ip);
        }
        else {
            Alert.alert("Warning", "Vefique que los campos esten llenos");
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
                    centerComponent={{ text: 'Add', style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
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
                    title="Save information"
                />
            </View>
        );
    }
}
