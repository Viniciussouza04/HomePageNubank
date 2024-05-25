import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    balanceContainer: {
        marginTop: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    balanceText: {
        fontSize: 18,
        color: '#333',
        fontWeight: "bold",
        paddingTop: 5
    },
    balanceAmount: {
        fontSize: 28,
        color: '#333',
        fontWeight: 'bold',
    },
    arrowCash: {
        color: '#919191',
    },
    horizontalLineTop: {
        marginTop: 30, 
        borderBottomColor: '#d2d1d3',
        borderBottomWidth: 1,
        width: '100%',
    },
    horizontalLineBottom: {
        marginTop: 12, 
        borderBottomColor: '#d2d1d3',
        borderBottomWidth: 1,
        width: '100%',
    },
    IconCard: {
        color: '#002222',
    },
    paddingTopArea:{
        paddingTop: 5
    }, 
    ValueCardArea: {
        paddingTop: 18,
    },
    TextCardArea: {
        fontSize: 17,
        fontWeight: "bold",
        color: '#BFBFC1',
    },
    CreditCardValue: {
        paddingTop: 5,
        fontSize: 25,
        fontWeight: "bold",
        color: "#191919"
    },
    TextLimitedCreditCard: {
        paddingTop: 5,
        color: '#BFBFC1',
        fontSize: 15,
        fontWeight: "bold"
    },
    IconHoldingDollar: {
        paddingTop: 100
    },
    PaddingBottomView:{
        paddingTop: 5
    }
})