import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';
import { Context } from '../context/ShopContext';

const { width, height } = Dimensions.get('screen');

const CreateScreen = ({navigation}) => {
  // const { state, addItem } = useContext(Context);
  const { addItem } = useContext(Context);
  const [name, onChangeName] = React.useState('');
  const [description, onChangeDescription] = React.useState('');
  const [quantity, onChangeQuantity] = React.useState();

  const handleSubmit = () => {
    addItem(name, description, quantity, () => navigation.navigate('Lista'))
    
  };

  const checkTextInput = () => {
    //Check for the name TextInput
    if (!name.trim()) {
      alert('Adjon meg egy nevet');
      return;
    }
    //Check for the descreption TextInput
    if (!description.trim()) {
      alert('Adjon meg egy leírást');
      return;
    }
    //Check for the quantity TextInput
    if (!quantity) {
      alert('Írjon be mennyiséget');
      return;
    }
    //Checked Successfully    
    handleSubmit()
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      onChangeName('')
      onChangeDescription('')
      onChangeQuantity()
      // Call any action
    },[]);

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);


  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <Text>Név:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder='Név'
          />
        </View>
        <View style={styles.inputBox}>
          <Text>Leírás:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeDescription}
            value={description}
            placeholder='Leírás'
          />
        </View>
        <View style={styles.inputBox}>
          <Text>Mennyiség:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeQuantity}
            value={quantity}
            placeholder='Mennyiség'
            keyboardType='numeric'
          />
        </View>
        <View style={styles.buttonBox}>
          <Button
            onPress={checkTextInput}
            title='Küldés'
            color='#f56642'          
          />
        </View>
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  inputBox: {
    width: width * 0.9,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    marginVertical: '2%',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  buttonBox: {
    marginTop: '4%',
    paddingHorizontal: '5%',
    borderRadius: 4,
  },
});
