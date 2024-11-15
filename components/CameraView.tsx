
import React, { useEffect } from 'react';
import {StyleSheet, TouchableOpacity, View, ViewProps, Text, ActivityIndicator} from 'react-native';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
  useCameraFormat,
} from 'react-native-vision-camera';

var scannerTimeout: any;
function CameraView(props: ViewProps & {onCodeScanned?: (code: string) => void}) {
  const device = useCameraDevice('back');
  const [cameraStarted, setCameraStarted] = React.useState(false);
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) requestPermission();
    return () => {
      if (scannerTimeout) {
        clearTimeout(scannerTimeout);
      }
    };
  })

  if (!hasPermission) return <Text>No permission</Text>;
  if (device == null) return <Text>No device</Text>;

  return (
    <View style={[StyleSheet.absoluteFill, props.style]}>
      {!cameraStarted && <View style={[StyleSheet.absoluteFill, {justifyContent: 'center'}]}><ActivityIndicator /></View> }
      <Camera
        style={StyleSheet.absoluteFill}
        resizeMode='contain'
        device={device}
        isActive={true}
        onStarted={() => setCameraStarted(true)}
      />
    </View>
  );
}
export default CameraView;
