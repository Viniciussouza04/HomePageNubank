import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

// Componente principal App
export default function App() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}

      <View style={styles.containerHeader}>
        <View style={styles.headerPaddingText}>
          <Text style={styles.headerTextUserName}>Olá, Vinicius</Text>
        </View>

        <View style={styles.headerPaddingText}>
          <Text style={styles.headerText}>Nubank</Text>
        </View>
      </View>
      


      <ScrollView style={styles.main}>
        {/* Seção de Saldo */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Saldo Disponível</Text>
          <Text style={styles.balanceAmount}>R$ 450,00</Text>
        </View>

        {/* Seção de Atalhos */}
        <View style={styles.shortcutsContainer}>
          <Text style={styles.shortcutsTitle}>Atalhos</Text>

          <View style={styles.shortcut}>
            <Text style={styles.shortcutText}>Pagar</Text>
          </View>
        
          <View style={styles.shortcut}>
            <Text style={styles.shortcutText}>Transferir</Text>
          </View>
        </View>

  
      </ScrollView>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a05be',
  },
  containerHeader: {
    flexDirection: 'row',
    backgroundColor: '#8a05be',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerPaddingText: {
    padding: 30,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerTextUserName: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    padding: 20,
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 16,
    color: '#333',
  },
  balanceAmount: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
  },
  shortcutsContainer: {
    marginBottom: 20,
  },
  shortcutsTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  shortcut: {
    backgroundColor: '#8a05be',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  shortcutText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});