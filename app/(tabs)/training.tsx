import { StyleSheet, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TrainingVideosList } from '@/components/TrainingVideosList';

export default function TrainingVideoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/nw-training.jpg')}
          style={styles.backgroundImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Training Videos</ThemedText>
      </ThemedView>
      <ThemedText>Browse our training videos below.</ThemedText>
      <TrainingVideosList></TrainingVideosList>
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
