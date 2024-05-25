import React from "react";
import { Text, View} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCreditCardAlt, faHandHoldingDollar, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {styles} from "./style"

export default function CreditCard(){
    return <View>
        <View style={styles.horizontalLineTop}/>
        <View style={styles.balanceContainer}>
            <View style={styles.paddingTopArea}>
                <FontAwesomeIcon style={styles.IconCard} size={18} icon={faCreditCardAlt}/> 
                <Text style={styles.balanceText}>Cartão de Crédito</Text>
            </View>
            <View>
                <FontAwesomeIcon style={styles.arrowCash} size={15} icon={faAngleRight} />
            </View>
        </View>
        <View style={styles.ValueCardArea}>
            <Text style={styles.TextCardArea}>Fatura Atual</Text>
            <Text style={styles.CreditCardValue}>R$ 400,00</Text>
            <Text style={styles.TextLimitedCreditCard}>Limite Disponível: R$ 1.120,77</Text>
        </View>
        <View style={styles.horizontalLineBottom}/>
        <View>
            <FontAwesomeIcon style={styles.IconHoldingDollar} size={24} icon={faHandHoldingDollar}/>
        </View>
        <View style={styles.PaddingBottomView}/>
  </View>
}