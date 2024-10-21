import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import React, { useState } from 'react';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import Slider from '@react-native-community/slider';

export default function HomeScreen() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  return (
    <PaperProvider> 
      <Appbar.Header>
        <Appbar.Content title="Sliders" />
      </Appbar.Header>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.text}>R: {value1}</ThemedText>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#1EB1FC"
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
          minimumTrackTintColor="#1EB1FC"
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
          minimumTrackTintColor="#1EB1FC"
          maximumTrackTintColor="#d3d3d3"
          step={1}
          value={value3}
          onValueChange={(val) => setValue3(val)}
        />
      </ThemedView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
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
