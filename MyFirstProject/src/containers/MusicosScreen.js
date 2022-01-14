import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, } from 'react-native';
import usuarios from '../components/ListData';

function MusicosScreen({ navigation }) {

    const [instrumento, setInstrumento] = useState();

    function genero(item){
        if('Femenino'===item.género)
            return<Image style={{height: 50, width: 50, padding: 40, marginHorizontal: 10}} source={require('../assets/HombreLogo.png')}/>
    }

}