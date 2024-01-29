import React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';

/*Componentes*/ 
import Topo from './src/telas/home/componentes/topo';
import UserValor from './src/telas/home/componentes/valorUser'
import Mycards from './src/telas/home/componentes/mycards';

// Lib Icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// Icons
import { faBarcode } from '@fortawesome/free-solid-svg-icons/faBarcode';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons/faMoneyBillTransfer';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons/faHandHoldingDollar';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons/faMobileScreen';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons/faMoneyBill';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faSignal } from '@fortawesome/free-solid-svg-icons/faSignal';




// Componente principal App
export default function App() {
  
  const shortcutsData = [
    { id: '1', icon: faDollarSign, text: 'Pix' },
    { id: '2', icon: faBarcode, text: 'Pagar' },
    { id: '3', icon: faMoneyBillTransfer, text: 'Transferir' },
    { id: '4', icon: faHandHoldingDollar, text: 'Depositar' },
    { id: '5', icon: faMobileScreen, text: 'Recarga Cel.'},
    { id: '6', icon: faMoneyBill, text: 'Cobrar' },
    { id: '7', icon: faHeart, text: 'Doação' },
    { id: '8', icon: faGlobe, text: 'Tranferir Int.'},
    { id: '9', icon: faSignal, text: 'Investir' },
  ];

  const renderShortcutItem = ({ item }) => (
    <View style={[styles.lineupShortcuts, { marginRight: 10 }]}>
      <View style={styles.circleShortcuts}>
        <FontAwesomeIcon style={styles.iconShortcuts} size={28} icon={item.icon} />
      </View>
      <Text style={styles.textShortcuts}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View>
        <Topo/>
      </View>

      <ScrollView style={styles.main}>
        {/* Seção de Saldo */}
        <View>
          <UserValor/>
        </View>
        
        {/* Seção de Atalhos com scroll lateral */}
        <View style={styles.shortcutsContainer}>
          <FlatList
            data={shortcutsData}
            renderItem={renderShortcutItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Seção Meus Cartões*/}
        <View>
          <Mycards/>
        </View>
      </ScrollView>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  /* Cabeçalho */
  container: {
    flex: 1,
    backgroundColor: '#8a05be',
    },
  /* Body */
  main: {
    flex: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#fff',
    padding: 20,
  },
  shortcutsContainer: {
    marginTop: 5,
    marginBottom: 35,
  },
  LineShortcuts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  circleShortcuts: {
    width: 75,
    height: 75,
    borderRadius: 75,
    backgroundColor: '#EAEBEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconShortcuts: {
    fontSize: 23,
    color: 'black',
  },
  textShortcuts: {
    fontSize: 14,
    color: '#333',
    paddingTop: 8,
    fontWeight: 'bold',
  },
  lineupShortcuts: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
});
