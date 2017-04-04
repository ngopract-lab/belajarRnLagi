import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './MenuBar.styles';

const MenuBar = () => (
  <ScrollView style={styles.menubar} horizontal>
    { ["Fokus", "Terpopuler", "Pilkada DKI", "Indeks", "Panas", "Seru", "Keren"].map((menu, index) => (
      <View key={index} style={styles.menubarItem}>
        <Text style={styles.menubarText}>{ menu }</Text>
      </View>
    ))}
  </ScrollView>
);

export default MenuBar;
