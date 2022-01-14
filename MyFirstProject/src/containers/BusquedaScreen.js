import React from 'react';
import {View, Text, Flatlist, Image} from 'react-native';
import usuarios from '../components/ListData';

function BusquedaScreen({ route }) {

    const {instrumento} = route.params;

    function genero(item){
        if('Femenino'===item.género)
            return <Image style/>
    }

}