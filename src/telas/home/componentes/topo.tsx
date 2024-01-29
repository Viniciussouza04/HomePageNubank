import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

export default function Topo() {
    return <View>
        <View style={styles.containerHeader}>
            <View style={styles.headerPaddingText}>
                <FontAwesomeIcon style={styles.headerIcon} size={33} icon={faUser} />
            </View>

            <View style={styles.headerPaddingText}>
                <FontAwesomeIcon style={styles.headerText} size={22} icon={faEye} />
                <FontAwesomeIcon style={styles.headerText} size={22} icon={faQuestion} />
                <FontAwesomeIcon style={styles.headerText} size={22} icon={faEnvelope} />
            </View>
        </View>
        <View>
            <Text style={styles.NameStyle}>Olá, Vini Souza</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        backgroundColor: '#8a05be',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
    },
    headerPaddingText: {
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    headerIcon: {
        color: '#FFFFFF',
        paddingLeft: 50,
    },
    headerText: {
        color: '#ffffff',
        paddingRight: 53,
    },
    NameStyle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        paddingStart: 20,
        paddingTop: 20,
        paddingBottom: 25,
    }
})