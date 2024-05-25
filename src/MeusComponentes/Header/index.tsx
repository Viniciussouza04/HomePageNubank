import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {styles} from "./style"

function Header() {

    return <View>
        <View style={styles.containerHeader}>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.headerPaddingText}>
                    <FontAwesomeIcon style={styles.headerIcon} size={30} icon={faUser} />
                </View>
            </TouchableOpacity>

            <View style={styles.headerPaddingText}>
                <FontAwesomeIcon style={styles.headerText} size={22} icon={faEye} />
                <FontAwesomeIcon style={styles.headerText} size={22} icon={faQuestion} />
                <FontAwesomeIcon style={styles.headerText} size={22} icon={faEnvelope} />
            </View>
        </View>
        <View>
            <Text style={styles.NameStyle}>Olá, Vinicius</Text>
        </View>
    </View>
}


export default Header