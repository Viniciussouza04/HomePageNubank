import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

export default function valorUser(){
    return <View style={styles.balanceContainer}>
    <View>
      <Text style={styles.balanceText}>Conta</Text>
      <Text style={styles.balanceAmount}>R$ 980,00</Text>
    </View>
    <View>
      <FontAwesomeIcon style={styles.arrowCash} size={20} icon={faAngleRight} />
    </View>
  </View>
}

const styles = StyleSheet.create({
    balanceContainer: {
        marginBottom: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    balanceText: {
        fontSize: 18,
        color: '#333',
    },
    balanceAmount: {
        fontSize: 28,
        color: '#333',
        fontWeight: 'bold',
    },
    arrowCash: {
        color: '#919191',
    }
})