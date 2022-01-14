import React, {useState} from 'react';
import { Text, View, Image, ScrollView, TextInput, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { exportDefaultDeclaration } from '@babel/types';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HistoriaScreen() {

  return (

    <ScrollView style={{backgroundColor:'white'}}>

      <Text style={{textAlign:'center', marginTop:20, color:'black',fontSize:20}}>Bienvenido a la historia de los dispositivos</Text>
      
      <Image style={{ height: 500, width: 300, marginLeft: 55, marginTop: 20 }}
        source={require(
           './src/assets/blackberry.jpeg')}
      />
      <Text style={{textAlign:'center', marginTop: 20, color:'black' }}>Blackberry</Text>
      <Text style={{marginTop:10, marginLeft:20}}>
        <Text style={{fontWeight:'bold', color:'black'}}>Fecha de lanzamiento: </Text>
        <Text style={{color:'black'}}>19 de Enero de 1999</Text>
      </Text>
      <Text style={{marginTop:10, marginLeft:20, marginRight:20, textAlign:'justify'}}>
        <Text style={{fontWeight:'bold', color:'black'}}>Historia: </Text>
        <Text style={{color:'black'}}>Blackberry es una marca canadiense fabricante de smartpones.
        Su característica más conocida es el teclado QWERTY del que disponen todos sus dispositivos.
        El sistema operativo que utiliza es BlackBerry OS y sistema de mensajería BBM.
        Los móviles Blackberry se lanzaron al mercado en 1999.
        En sus comienzoa el punto diferenciador con otros móviles era el correo electrónico.
        Blackberry alcanzó su punto álgido en 2011, con el 14% de cuota de mercado en EEUU.
        El sistema operativo de los móviles Blackberry es BlackBerry OS multitarea.
        Blackberry OS puede activarse de forma inalámbrica y permite utilizar el correo electrónico y sincronizar calendarios, contactos, notas y tareas.
        El modelo 2013 incluye soporte para FaceBook, Twitter y LinkedIn.
        La mayoría de los modelos de Blackberry disponen de teclado QWERTY, exceptuando los modelos OS10 que funcionan deslizando el pulgar.
        La navegación se logra con una bola de desplazamiento normalmente situada en el centro del dispositivo.</Text>
      </Text>
      <Text style={{marginTop:10, marginLeft:20, marginRight:20, textAlign:'justify'}}>
        <Text style={{fontWeight:'bold', color:'black'}}>Conclusión: </Text>
        <Text style={{color:'black'}}>Actualmente, Blackberry no ha sacado ningún nuevo modelo de teléfono desde el año 2016.
        Además, se ha anunciado de forma reciente que Blackberry dejara de proporcionar soporte software para sus modelos clásicos,
        con lo que estos perderan toda la conectividad y funciones.</Text>
      </Text>
      
      <Image style={{ height: 500, width: 300, marginLeft: 55, marginTop: 20}}
        source={require(
          './src/assets/nokia.jpg'
        )}
      />
      <Text style={{textAlign:'center', marginTop: 20, color:'black' }}>Nokia</Text>
      <Text style={{marginTop:10, marginLeft:20}}>
        <Text style={{fontWeight:'bold', color:'black'}}>Fecha de lanzamiento: </Text>
        <Text style={{color:'black'}}>1 de Septiembre del 2000</Text>
      </Text>
      <Text style={{marginTop:10, marginLeft:20, marginRight:20, textAlign:'justify'}}>
        <Text style={{fontWeight:'bold', color:'black'}}>Historia: </Text>
        <Text style={{color:'black'}}>Teléfono móvil o GSM de dos bandas: GSM 900/1800.
        Fue lanzado para reemplazar a los modelos anteriores de teléfono de forma satisfactoria y rentable.
        Fue uno de los teléfonos más populares, con más de 100 millones de unidades vendidas.
        El terminal ha sido relanzado en 2017 en una versión moderna, con pantalla a color, sistema Nokia Series 30+, conectividad 3G,
        Cámara fotográfica 2Mpx y Bluetooth 3.0.</Text>
      </Text>
      <Text style={{marginTop:10, marginLeft:20, marginRight:20, textAlign:'justify'}}>
        <Text style={{fontWeight:'bold', color:'black'}}>Conclusión: </Text>
        <Text style={{color:'black'}}>En 2017, Nokia y Xiomi anunciaron su acuerdo de colaboración empresarial, 
        junto con su intención de compartir patentes. En la actualidad Nokia sigue produciendo teléfonos, pero ahora 
        la mayor parte de sus ingresos provienen de su negocio de redes NSN (Nokia Networks).</Text>
      </Text>

      <Image style={{ height: 500, width: 300, marginLeft: 55, marginTop: 20}}
        source={require(
          './src/assets/iphone.jpeg'
        )}
      />
      <Text style={{textAlign:'center', marginTop: 20, color:'black' }}>IPhone</Text>
      <Text style={{marginTop:10, marginLeft:20}}>
        <Text style={{fontWeight:'bold', color:'black'}}>Fecha de lanzamiento: </Text>
        <Text style={{color:'black'}}>29 de Junio de 2007</Text>
      </Text>
      <Text style={{marginTop:10, marginLeft:20, marginRight:20, textAlign:'justify'}}>
        <Text style={{fontWeight:'bold', color:'black'}}>Historia: </Text>
        <Text style={{color:'black'}}>Todo comenzó en 2004, cuando varios ingenieros comenzaron
        a investigar pantallas táctiles bajo la dirección de Steve Jobs, el CEO de Apple.
        Apple creó este dispositivo con la colaboración exclusiva y sin precedentes de AT%T Mobility, con un coste
        estimado de 150 millones de dólares en un periodo de treinta meses. AT&T dio a Apple la libertad de desarrollar
        el hardware y software del iPhone, e incluso pagó a Apple una fracción del dinero obtenido al ofrecer el servicio
        mensual a consumidores, a cambio de 4 años de exclusividad en Estados Unidos, has 2010.</Text>
      </Text>
      <Text style={{marginTop:10, marginLeft:20, marginRight:20, textAlign:'justify'}}>
        <Text style={{fontWeight:'bold', color:'black'}}>Conclusión: </Text>
        <Text style={{color:'black'}}>Si bien contando con precios más elevados que los de otras marcas competidoras,
        sus modelos siguen siguen teniendo un amplio auge en el mercado móvil, manteniendose como una de las marcas más vendidas.</Text>
      </Text>

      <Image style={{ height: 500, width: 300, marginLeft: 55, marginTop: 20}}
        source={require(
          './src/assets/samsung.jpg'
        )}
      />
      <Text style={{textAlign:'center', marginTop: 20, color:'black' }}>Samsung</Text>
      <Text style={{marginTop:10, marginLeft:20}}>
        <Text style={{fontWeight:'bold', color:'black'}}>Fecha de lanzamiento: </Text>
        <Text style={{color:'black'}}>Junio de 2009</Text>
      </Text>
      <Text style={{marginTop:10, marginLeft:20, marginRight:20, textAlign:'justify'}}>
        <Text style={{fontWeight:'bold', color:'black'}}>Historia: </Text>
        <Text style={{color:'black'}}>Fue anunciado en abril de 2009. El Samsung Galaxy fue uno de los primeros modelos en 
        utilizar el sistema operativo de código abierto Android. El dispositivo contaba con una pantalla táctil AMOLED de 3,2
        pulgadas. Sentó las bases de lo que a futuro sería una gama de teléfonos móviles marcados con una "S" en su nombre.</Text>
      </Text>
      <Text style={{marginTop:10, marginLeft:20, marginRight:20, marginBottom:20, textAlign:'justify'}}>
        <Text style={{fontWeight:'bold', color:'black'}}>Conclusión: </Text>
        <Text style={{color:'black'}}>En la actualidad Samsung esta consolidada como la empresa más importante en Corea del Sur.
        Cuentan con millones de usuarios en todo el mundo que emplean sus teléfonos y demás dispositivos electrónicos. Siguen sacando
        al mercado modelos de móvil nuevos cada años, los cuales se caracterizan por una buena caliddad que los ha convertido en una
        de las marcas más vendidas.</Text>
      </Text>

    </ScrollView>
  );
}

function BusquedaScreen({navigation}) {

  const [age, setAge]=useState();

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
      <Text>Instrumento</Text> 
      <TextInput
      style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom:20}}
      onChangeText={age => setAge(age)}
      />
      <Button
        title={"Buscar"}
        onPress={() => navigation.navigate('Usuarios', {age:age})}
      />

    </View>
  );
}

const NavigationStack = createNativeStackNavigator();

function BusquedaStack() {
  return (
    <NavigationStack.Navigator>

      <NavigationStack.Screen options={{headerStyle:{backgroundColor:'lime'},headerTitleAlign:'center'}} name="Listado de usuarios" component={BusquedaScreen}/>
      <NavigationStack.Screen options={{headerStyle:{backgroundColor:'lime'},headerTitleAlign:'center'}} name="Usuarios" component={UsuariosScreen}/>  

    </NavigationStack.Navigator>
  );
}

function UsuariosScreen({ route }) {

  const {age} = route.params;

  return (
    <View>
      <ScrollView>
        <Text>Tus usuarios son los siguientes</Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View>
              {filtro(age, item)}
            </View>)
          }
        />
      </ScrollView>
    </View>
  );

}

function filtro(age, item) {
  if (age > item.age) return <Text>{item.name}, edad: {item.age}</Text>
}

const DATA = [
  { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
  { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
  { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },
  { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' },
  { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
  { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
  { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
  { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
  { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
  { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
  { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
  { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
  { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
  { id: 16, name: 'Pedro Flecha', age: 53, sex: 'Varón' },
  { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
  { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
  { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
  { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' }
]

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Historia') {
              iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            } else if (route.name === 'Musicos') {
              iconName = focused ? 'ios-list-blox' : 'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTinColor: 'gray',
        })}
      >
        <Tab.Screen options={{headerStyle:{backgroundColor:'lime'},headerTitleAlign:'center',tabBarStyle:{backgroundColor:'lime'}}} 
        name="Historia" component={HistoriaScreen} />
        <Tab.Screen options={{headerShown: false ,headerStyle:{backgroundColor:'lime'},headerTitleAlign:'center',tabBarStyle:{backgroundColor:'lime'}}} 
        name="Musicos" component={BusquedaStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}