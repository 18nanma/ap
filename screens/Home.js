// import React from 'react';
// import { Text, View, ScrollView, Alert, Linking, Dimensions } from 'reac-native';
// import { Header, Input, SearchBar, Button } from 'react-native-elements';
// import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
// import { Spinner, ListItem, Separator } from 'native-base';
// import IconF from 'react-native-vector-icons/FontAwesome';
// import { Font } from 'expo';
// import * as SQLite from 'expo-sqlite';

// const AlertMsg = 'Are you sure you want to delete this room ?';
// const AlertCancel = 'You have cancelled the deletion.';
// const db = SQLite.openDatabase('APRooms.db');
// const { width, height } = Dimensions.get('window');

// export default class Home extends React.Component {
    
//     state = {
//         loading: true,
//         dataList: [],
//         search: ''
//     };

//     async componentWillMount() {
//         db.transaction(tx => {
//             tx.executeSql(
//                 'create table if not exists tbl_rooms (id integer primary key not null, room text, ip text);'
//             );
//         });
//         this.setState({ loading: false });
//     }
    
//     async componentDidMount() {
//         const { search } = this.state;
//         await this.fetchData(search);
//     }

//     async handleSearch(val) {
//         this.setState({ search: val });
//         await this.fetchData(val);
//     }

//     fetchData(search) {
//         var query = "SELECT * FROM tbl_rooms WHERE room LIKE '%" + search + "%'";
//         var params = [];
//         db.transaction((tx) => {
//             tx.executeSql(query, params, (tx, results) => {
//                 console.log(results);
//                 if(results.rows._array.length > 0) {
//                     this.setState({
//                         dataList: results.rows._array
//                     });
//                 }
//               }, function (tx, err) {
//                   Alert.alert("An error has occured.")
//             });
//         });
//     }

//     deleteData(id) {
//         var query = "DELETE FROM tbl_rooms WHERE id = ?";
//         var params = [id];
//         db.transaction((tx) => {
//             tx.executeSql(query, params, (tx, results) => {
//                 Alert.alert("Success", "Room has been deleted");
//             }, function(tx, err) {
//                 Alert.alert("Warning", "Room could not be deleted" + err);
//             });
//         });
//     }

//     async handleDelete(id) {
//         const { search } = this.state;
//         await this.deleteData(id);
//         this.fetchData(search);
//     }

//     handleAdd() {
//         this.props.navigation.navigate('Add');
//     }
//     handleEdit(id) {
//         this.props.navigation.navigate('Edit', { id });
//     }

//     render() {
//         if (this.state.loading) {
//             return (
//                 <View style={{ felx: 1, justifyContent: 'center', alignItems: 'center' }}>
//                     <Spinner color="blue" />
//                 </View>
//             );
//         }
//         const listItem = this.state.dataList.map((item) =>
//         <View key={item.id}>
//             <Collapse style={{marginBottom: 10, marginTop: 10}}>
//                 <CollapseHeader>
//                     <Separator bordered>
//                         <View style={{flexDirection: 'row'}}>
//                             <Text style={{ fontSize: 14, color: '#000000'}}>{item.room}</Text>
//                             <Button
//                                 onPress={() =>
//                                     Alert.alert('ALERT', AlertMsg, [
//                                         { text: 'Cancel', onPress: () => Alert.alert(AlertCancel) },
//                                         { text: 'ok', onPress: () => this.handleDelete(item.id)}
//                                     ])}
//                         </View>
//                     </Separator>
//                 </CollapseHeader>
//             </Collapse>
//         </View>
//         )       
//     }



// }



import React from 'react';
import { Text, View, ScrollView, Alert, Linking, Dimensions } from 'react-native';
import { Header, Input, SearchBar, Button } from 'react-native-elements';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Spinner, ListItem, Separator } from 'native-base';
import IconF from 'react-native-vector-icons/FontAwesome';
import { Font } from 'expo';
import * as SQLite from 'expo-sqlite';

const AlertMsg = 'Are you sure you want to delete this room ?';
const AlertCancel = 'You have cancelled the deletion.';
const db = SQLite.openDatabase('Milagro.db');
const { width, height } = Dimensions.get('window');

export default class Home extends React.Component {

    state = { loading: true, dataTodo: [], search: '' };

    async componentWillMount() {
        db.transaction(tx => {
            tx.executeSql(
                'create table if not exists tbl_milagros (id integer primary key not null, name text,age text);'
            );
        });
        this.setState({ loading: false });
    }
    async componentDidMount() {
        const { search } = this.state;
        await this.fetchData(search);
    }

    async handleSearch(val) {
        this.setState({ search: val });
        await this.fetchData(val);
    }

    fetchData(search) {
        var query = "SELECT * FROM tbl_milagros WHERE name LIKE '%" + search + "%'";
        var params = [];
        db.transaction((tx) => {
            tx.executeSql(query, params, (tx, results) => {
                console.log(results);
                if (results.rows._array.length > 0) {
                    this.setState({
                        dataTodo: results.rows._array
                    });
                }
            }, function (tx, err) {
                Alert.alert("Welcome");
            });
        });
    }

    deleteData(id) {
        var query = "DELETE FROM tbl_milagros WHERE id = ?";
        var params = [id];
        db.transaction((tx) => {
            tx.executeSql(query, params, (tx, results) => {
                Alert.alert("Success", "Room has been deleted");

            }, function (tx, err) {
                Alert.alert("Warning", "Room could not be deleted" + err);
            });
        });
    }


    async handleDelete(id) {
        const { search } = this.state;
        await this.deleteData(id);
        this.fetchData(search);
    }

    handleAdd() {
        this.props.navigation.navigate('Add');
    }
    handleEdit(id) {
        this.props.navigation.navigate('Edit', { id });
      }

    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Spinner color="green" />
                </View>
            );
        }
        const listItem = this.state.dataTodo.map((item) =>
            <View key={item.id}>
                <Collapse style={{ marginBottom: 10, marginTop: 10 }}>
                    <CollapseHeader>
                        <Separator bordered>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 16, color: '#000000' }}>{item.name}</Text>
                                <Button
                                    onPress={() => this.handleEdit(item.id)}
                                    icon={<IconF name='eye' color='#2B2F33' size={21} />}
                                    iconContainerStyle={{ marginRight: 20 }}
                                    buttonStyle={{ height: 20, width: 80, backgroundColor: '#F0EEF4', marginLeft: 0.35*width}}
                                    titleStyle={{ fontSize: 11, color: '#000000' }}
                                    title='  Edit'
                                />
                                <Button
                                    onPress={() =>
                                        Alert.alert('ALERT', AlertMsg, [
                                            { text: 'Cancel', onPress: () => Alert.alert(AlertCancel) },
                                            { text: 'ok', onPress: () => this.handleDelete(item.id) },

                                        ])
                                    }
                                    icon={<IconF name='trash' color='#2B2F33' size={21} />}
                                    buttonStyle={{ height: 20, width: 80, backgroundColor: '#F0EEF4', marginRight: 10 }}
                                    titleStyle={{ fontSize: 12, color: '#000000' }}
                                    title='  Delete' />
                            </View>
                        </Separator>
                    </CollapseHeader>
                    <CollapseBody>
                        <ListItem style={{ marginBottom: 3, marginTop: 3 }}>
                            <Text><Text> Name : </Text>{item.name}</Text>
                        </ListItem>
                        <ListItem style={{ marginBottom: 3, marginTop: 3 }}>
                            <Text><Text> IP Address : </Text>{item.age}</Text>
                        </ListItem>
                    </CollapseBody>
                </Collapse>
            </View>
        );

        return (
            <View >
                <Header
                    placement="left"
                    leftComponent={{ text: 'Home', style: { color: '#fff', fontSize: 19 , marginLeft: 0.2*width} }}
                    // rightComponent={{ icon: 'edit', color: '#fff', onPress: () => this.handleEdit() }}
                    rightComponent={{ icon: 'add-circle', color: '#fff', onPress: () => this.handleAdd() }}
                    containerStyle={{ backgroundColor: '#2B2F33' }}
                    leftContainerStyle={{ marginLeft: 65 }}
                    rightContainerStyle={{ marginRight: 18 }}
                    centerContainerStyle={{ marginLeft: 86 }}
                />
                <SearchBar
                    platform={"ios"}
                    placeholder="Search by name"
                    onChangeText={(val) => this.handleSearch(val)} value={this.state.search} value={this.state.search}
                    containerStyle={{ backgroundColor: '#F8FBFD', borderColor: '#fff', borderWidth: 2, marginTop: 10 }}
                    placeholderTextColor={'#2B2F33'}
                />
                <ScrollView>

                    <View>
                        {listItem}
                    </View>
                </ScrollView>

            </View>
        );
    }
}