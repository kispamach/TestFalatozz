import { StyleSheet, ScrollView, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/ShopContext';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Card } from 'react-native-elements';

const ReadScreen = () => {
  const { state, addItem } = useContext(Context);

  return (
    <ScrollView>
        {state.map((item, index) => {
          return (
            <View style={styles.container}>
              <Card key={index.toString()} title={item.name}>
                <Text style={styles.paragraph}>{item.description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                  <Ionicons
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      name='md-pencil'
                    />
                  <Text style={styles.quantity}>{item.quantity} db</Text>
                  <Ionicons
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    name='md-trash'
                  />
                </View>              
              </Card>
            </View>
          );
        })}
    </ScrollView>
      
    
  );
};

export default ReadScreen;

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2%',
      backgroundColor: '#ecf0f1',
      fontWeight: 'bold',
    },
    paragraph: {
      margin: 16,
      fontSize: 18,
      textAlign: 'center',
      color: '#7a6323',
    },
    quantity: {
      paddingRight: 20,
      paddingLeft: 20,
    }
});
