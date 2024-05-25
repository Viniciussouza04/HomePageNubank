import React from 'react';
/*Componentes*/ 
import {Header, Mycard, TotalConta, CreditCard, Carrosel} from './src/MeusComponentes/';
/*Telas*/
import {HomePageUser} from './src/telas'



/* NECESSÁRIO TIRAR DO APP.TSX */
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
/*Icons*/
import 
{faHandHoldingDollar, 
faDollarSign, 
faBarcode, 
faMoneyBillTransfer,
faMobileScreen,
faMoneyBill,
faHeart,
faGlobe,
faSignal
} from '@fortawesome/free-solid-svg-icons';


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


  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View>
        <Header/>
      </View>

      <ScrollView style={styles.main}>
        {/* Seção de Saldo */}
        <View>
          <TotalConta/>
        </View>
        
        {/* Seção de Atalhos com scroll lateral */}
        <View>
          <FlatList
            data={shortcutsData}
            renderItem={Carrosel}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/*Seção Meus Cartões*/}
        <View>
          <Mycard/>
        </View>

        {/*Seção Cartão De Crédito*/}
        <View>
          <CreditCard/>
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
  }
});
