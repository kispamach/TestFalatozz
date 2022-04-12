import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/ShopContext';

import { Card } from 'react-native-elements';

// const { width, height } = Dimensions.get('screen');

const ReadScreen = () => {
  const { state, addItem } = useContext(Context);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {state.map((item, index) => {
          return (
            <Card key={index.toString()} title={item.name}>
              <Text style={styles.paragraph}>{item.description}</Text>              
              <Text>Quantity: {item.quantity}</Text>
            </Card>
          );
        })}
      </View>
    </SafeAreaView>
    
  );
};

export default ReadScreen;

const styles = StyleSheet.create({
    // itemBox: {
    //     width: width * 0.9,
    //     margin: '5%',
    //     borderRadius: 6,
    //     backgroundColor: 'white',
    //     padding: '2%'
    // },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
});
