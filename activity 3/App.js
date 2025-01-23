import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
        Justine 
              <Text style={styles.lastname}>  Pestano</Text>
              {'\n'}
        <Text style={styles.innerText}>  BSIT</Text>
      </Text>

       <Text style={styles.school}>  hi im justine pestano currently taking <Text style={styles.bsit}>bsit</Text> in global reciprocal colleges(grc) hoping in my it journey i gain more knowledge when it comes to programming</Text>





    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  innerText: {
    color: 'red',
  },
lastname: {
  color: 'pink',
},

school: {
  fontWeight: 'bold',
},

bsit: {
  color: 'red',
}

});

export default BoldAndBeautiful;