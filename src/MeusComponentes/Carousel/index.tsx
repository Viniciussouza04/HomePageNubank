import {View, Text} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {styles} from './style';

/*Icons*/
import { faBarcode } from '@fortawesome/free-solid-svg-icons/faBarcode';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons/faMoneyBillTransfer';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons/faHandHoldingDollar';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons/faMobileScreen';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons/faMoneyBill';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faSignal } from '@fortawesome/free-solid-svg-icons/faSignal';

export const Carrosel = ({ item }) => {
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
  return(
    <View style={[styles.lineupShortcuts, { marginRight: 10 }]}>
      <View style={styles.circleShortcuts}>
        <FontAwesomeIcon style={styles.iconShortcuts} size={28} icon={item.icon} />
      </View>
      <Text style={styles.textShortcuts}>{item.text}</Text>
    </View>
  )
};

 /*VALIDAR  VINI*/