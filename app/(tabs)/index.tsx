import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import React, { useState, useEffect } from 'react';
import { Provider as PaperProvider, Appbar } from 'react-native-paper'; //Library to simplify creation of fast responsive interfaces
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage'; //Async Storage Library (References: https://reactnative.dev/docs/asyncstorage, )

//Main Code
export default function HomeScreen() {

  //Variables
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const chosenColor = `rgb(${value1}, ${value2}, ${value3})`;

  //Function to store RGB values in AsyncStorage
  const storeRGBValues = async () => {
    try {
      await AsyncStorage.setItem(
        'rgbValues',
        JSON.stringify({ red: value1, green: value2, blue: value3 })
      );
    } catch (error) {
      console.log('Error saving RGB values', error);
    }
  };

  //Function to retrieve RGB values from AsyncStorage
  const retrieveRGBValues = async () => {
    try {
      const value = await AsyncStorage.getItem('rgbValues');
      if (value != null) {
        const { red, green, blue } = JSON.parse(value);
        setValue1(red);
        setValue2(green);
        setValue3(blue);
      }
    } catch (error) {
      console.log('Error loading RGB values', error);
    }
  };

    //Retrieve the values (only one time)
    useEffect(() => {
      retrieveRGBValues();
    }, []);
  
    //Save the RGB values when they change
    useEffect(() => {
      storeRGBValues();
    }, [value1, value2, value3]);
  
  return (
    <PaperProvider> 
      <Appbar.Header>
        <Appbar.Content title="Sliders" />
      </Appbar.Header>
      <ThemedView style={[styles.container, {backgroundColor: chosenColor}]}>
        <ThemedText style={styles.text}>R: {value1}</ThemedText>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#d3d3d3"
          step={1}
          value={value1}
          onValueChange={(val) => setValue1(val)}
        />
        <ThemedText style={styles.text}>G: {value2}</ThemedText>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#d3d3d3"
          step={1}
          value={value2}
          onValueChange={(val) => setValue2(val)}
        />
        <ThemedText style={styles.text}>B: {value3}</ThemedText>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#0000FF"
          maximumTrackTintColor="#d3d3d3"
          step={1}
          value={value3}
          onValueChange={(val) => setValue3(val)}
        />
      </ThemedView>
    </PaperProvider>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: '#000000',
  },
  slider: {
    width: 300,
    height: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
