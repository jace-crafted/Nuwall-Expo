import * as React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus, AVPlaybackStatusSuccess } from 'expo-av';
import { Button } from '@ui-kitten/components';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const theme = useColorScheme() ?? 'light';
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("@/assets/videos/sample-training.mp4")}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        usePoster
        isLooping
        posterSource={require("@/assets/images/nw-corner.jpg")}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          size='small'
          status='primary'
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
          accessoryLeft={<Ionicons
            name={status.isPlaying ? 'pause-circle-outline' : 'play-circle-outline'}
            color={'#ffffff'}
            size={18}
          />}
          >
          {status.isPlaying ? 'Pause' : 'Play'}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
    marginBottom: 10
  },
  buttons: {
    paddingHorizontal:10,
    paddingBottom:10
  },
});