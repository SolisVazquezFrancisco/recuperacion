import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, } from 'react-native';
import usuarios from '../components/ListData';

function MusicosScreen({ navigation }) {

    const [instrumento, setInstrumento] = useState();

    function genero(item){
        if('Femenino'===item.género)
            return<Image style={{height: 50, width: 50, padding: 40, marginHorizontal: 10}} 
            source={require('../assets/MujerLogo.png')}/>
        else if('Masculino'===item.género)
            return<Image style={{height:50, width: 50, padding: 40, marginHorizontal: 10}}
            source={require('../assets/HombreLogo.png')}/>
    }

    function renderItem(item) {

        return (
            <View>
                <View style={{padding:10, flexDirection: 'row'}}>
                    {genero(item)}
                    <Text style={{padding: 10, flex: 2}}>
                        <Text style={{fontSize: 20, color: 'black', textAlign: 'center', padding: 30}}>{item.nombre} </Text>
                        <Text>                                                                                       </Text>
                        <Text style={{fontSize: 20, color: 'red', textAlign:'center'}}>{item.instrumento} </Text>
                    </Text>
                </View>
                <View>
                    <Text style={{color: 'blue', textAlign: 'center'}}>______________________________________________</Text>
                </View>
            </View>
        );

    }

    return (
        <View style={{flex: 2}}>
            <View style={{padding: 30, flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'black', textAlign: 'center', padding: 10, flex: 2}}> Instrumento </Text>
                <TextInput style={{fontSize: 20, color: 'black', borderWidth: 1, fontWeight: 'bold', textAlign: 'center', flex: 3}} onChangeText={instrumento => setInstrumento(instrumento)}/>
            </View>
            <TouchableOpacity style={{marginHorizontal: 150}} onPress={() => navigation.navigate('Busqueda', { instrumento: instrumento})}>
                <Text style={{color:'black', backgroundColor: 'lime', textAlign: 'center', width: 100}}>Buscar</Text>
            </TouchableOpacity>
            <FlatList
                data={usuarios}
                renderItem={({ item }) => (<View>{renderItem(item)}</View>)}
            />
        </View>
    );

}

export default MusicosScreen;