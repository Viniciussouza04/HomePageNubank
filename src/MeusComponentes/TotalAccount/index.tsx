import React from "react";
import { Text, View} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import {styles} from "./style"

export default function TotalConta(){
    return <View style={styles.balanceContainer}>
    <View>
      <Text style={styles.balanceText}>Conta</Text>
      <Text style={styles.balanceAmount}>R$ 2300,00</Text>
    </View>
    <View>
      <FontAwesomeIcon style={styles.arrowCash} size={20} icon={faAngleRight} />
    </View>
  </View>
}