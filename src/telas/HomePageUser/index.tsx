import React from "react";
import { View, ScrollView, FlatList } from 'react-native';
import {Header, TotalConta, Mycard, CreditCard, Carrosel} from '../../MeusComponentes'
import {styles} from './styles'

/*Icons Home Page*/
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


export default function HomePageUser() {

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
  
          {/* Seção Meus Cartões*/}
          <View>
            <Mycard/>
          </View>
  
          <View>
            <CreditCard/>
          </View>
        </ScrollView>
      </View>
    );
  }