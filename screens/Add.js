import React from 'react';
import { Text, View, ScrollView, Alert, Linking,Button } from 'react-native';
import { Header, Input, SearchBar,  } from 'react-native-elements';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Spinner, ListItem, Separator } from 'native-base';
import { Font } from 'expo';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('Milagro.db')

export default class Add extends React.Component {

  
    state = { name: '' }
    state = { age: '' }

  
    insert(name, age) {
        var query = "INSERT INTO tbl_milagros (id,name,age) VALUES (null,?,?)";
        var params = [name, age];
        db.transaction((tx) => {
            tx.executeSql(query, params, (tx, results) => {
                console.log(results);
                Alert.alert("Success", "Room has been added!");
            }, function (tx, err) {
                Alert.alert("Warning", "Room has not been added");
                return;
            });
        });
    }
    handleSave() {
        const { name } = this.state;
        const { age } = this.state;

        if (name != "" && age != "") {
            this.insert(name, age);
            this.props.navigation.navigate('Home');
        }
        else {
            Alert.alert("Warning", "Room has not been saved");
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
                    onChangeText={(val) => this.setState({ name: val })} value={this.state.name}
                    placeholder='Room Name'
                    leftIconContainerStyle={{ marginRight: 15 }}
                    inputContainerStyle={{ marginTop: 45, width: 330, marginLeft: 30 }}
                />
                <Input
                    onChangeText={(val) => this.setState({ age: val })} value={this.state.age}
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
