import React from 'react';
import {View, Text, Flatlist, Image} from 'react-native';
import usuarios from '../components/ListData';

function BusquedaScreen({ route }) {

    const {instrumento} = route.params;

    function genero(item){
        if('Femenino'===item.género)
            return <Image style={{height: 50, width: 50, marginHorizontal: 10, padding: 40}} 
            source={require('../assets/MujerLogo.png')}/>
        else if ('Masculino'===item.género)
            return <Image style={{height: 50, width: 50, marginHorizontal: 10, padding: 40,}}
            source={require('../assets/HombreLogo.png')}/>
    }

    function renderItem(instrumento, item) {

        if(instrumento === item.instrumento)
            return (
                <View>
                    <Text style={{fontSize: 20, color: 'black', marginTop: 30, marginHorizontal: 115}}> {item.nombre} </Text>
                    <View style={{padding: 10, flexDirection: 'row'}}>
                        {genero(item)}
                        <Text style={{padding: 10, flex: 2}}>
                            <Text>
                                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>Edad: </Text>
                                <Text style={{fontSize: 20, color: 'black', padding: 30, textAlign: 'center'}}> {item.edad}</Text>
                            </Text>
                            <Text>                                                                                         </Text>
                            <Text>
                                <Text style={{fontSize: 20, color:'black', fontWeight:'bold', textAlign: 'center'}}> Ciudad: </Text>
                                <Text style={{fontSize: 20, color: 'black', padding: 30, textAlign: 'center'}}> {item.ciudad}</Text>
                            </Text>
                            <Text>                                                                                           </Text>
                            <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}> {item.instrumento} </Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={{color: 'blue', textAlign: 'center'}}>_______________________________________</Text>
                    </View>
                </View>
            );

    }

    return (
        <View style={{flex: 2}}>
            <Flatlist
                data={usuarios}
                renderItem={({ item }) => (<View>renderItem(instrumento, item)</View>)}
            />
        </View>
    );

}

export default BusquedaScreen;