import React from "react";
import {Text, View} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons/faCreditCard';
import {styles} from "./style"


export default function Mycard(){
    return <View style={styles.PaddingArea}>
    <View style={styles.MycardArea}>
      <FontAwesomeIcon style={styles.IconCard} size={27} icon={faCreditCard} />
      <Text style={styles.TextIconCard}>Meus Cartões</Text>
    </View>
  </View>
}

