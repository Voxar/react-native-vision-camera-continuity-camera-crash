import { ThemedText } from '@/components/ThemedText'
import { useIsFocused } from '@react-navigation/native'
import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera'

export default function TabTwoScreen() {
  const { hasPermission, requestPermission } = useCameraPermission()
  const hasFocus = useIsFocused()
  const device = useCameraDevice('back')

  useEffect(() => {
    if (!hasPermission) {
      requestPermission()
    }
  }, [])
  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      {hasPermission ? (
        device ? (
          <Camera device={device} isActive={hasFocus} style={StyleSheet.absoluteFill} />
        ) : (
          <ThemedText>Camera is not available</ThemedText>
        )
      ) : (
        <ThemedText>Please grant camera permission</ThemedText>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
