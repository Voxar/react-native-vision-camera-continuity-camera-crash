import { Image, StyleSheet, Platform, Modal, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CameraView from '@/components/CameraView';
import React from 'react';

export default function HomeScreen() {
  const [showCamera, setShowCamera] = React.useState(false);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        <Modal visible={showCamera} style={StyleSheet.absoluteFill} transparent>
          <View style={[StyleSheet.absoluteFill, {backgroundColor: 'rgba(0,0,0,0.6)', alignItems: 'center', justifyContent: 'center', flex: 1}]} onTouchEnd={() => setShowCamera(false)}>
            <View style={[{width: "80%", height: "80%", backgroundColor: 'black'}]} onTouchEnd={() => setShowCamera(false)}>
              <CameraView />
            </View>
          </View>
        </Modal>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TouchableOpacity onPress={() => setShowCamera(true)}>
          <ThemedText type="subtitle">Step 1: Tap here to show Camera</ThemedText>
        </TouchableOpacity>
        <ThemedText>
          Tap above to show the camera, then tap on the camera to close it. Repeat. 
        </ThemedText>
        <ThemedText>
          When you crash in `stopDeviceOrientationListener`, add [weak self] to the `motionManager.startAccelerometerUpdates` closure.
        </ThemedText>
        <ThemedText>
          Start app again and open & close the camera repeatedly. The app eventually crashes with `EXC_BAD_ACCESS` somewhere where `motionManager` is accessed after being freed on some other thread.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
