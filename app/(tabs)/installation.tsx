import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { InstallationVideosList } from '@/components/InstallationVideosList';

export default function InstallationVideoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/nw-installation.jpg')}
          style={styles.backgroundImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Installation Videos</ThemedText>
      </ThemedView>
      <ThemedText>Browse our 3D installation videos below.</ThemedText>
      <Collapsible children={<InstallationVideosList></InstallationVideosList>} title='Vertical Over Cavity'>
      </Collapsible>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage : {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'stretch',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
