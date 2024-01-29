import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons/faCreditCard';

export default function Mycard(){
    return <View>
    <View style={styles.MycardArea}>
      <FontAwesomeIcon style={styles.IconCard} size={27} icon={faCreditCard} />
      <Text style={styles.TextIconCard}>Meus Cartões</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
    MycardArea: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        backgroundColor: '#EDEEF3',
        height: 55,
        width: 370,
        borderRadius: 10 
    },
    IconCard: {
        paddingStart: 75,
        color: '#002222'
    },
    TextIconCard: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#002222"
    }
})