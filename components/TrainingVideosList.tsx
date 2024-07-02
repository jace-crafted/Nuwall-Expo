import React from 'react';
import { ImageSourcePropType, StyleSheet, useColorScheme } from 'react-native';
import { Card, Text, Modal, Button } from '@ui-kitten/components';
import { View, Image  } from 'react-native';
import TrainingVideoPlayer from '@/components/TrainingVideoPlayer';

export const TrainingVideosList = (): React.ReactElement => {
  const theme = useColorScheme() ?? 'light';
  const [visible, setVisible] = React.useState(false);
  interface DataItem {
    title: string;
    text: string;
    image: ImageSourcePropType;
  }

  const Header = (data : DataItem): React.ReactElement => (
    <>
      <TrainingVideoPlayer></TrainingVideoPlayer>
    </>
  );

  const data: DataItem[] = [];
  data.push({ title: 'Window Installation', 
    text: 'Builder trainer Matt goes through a window installation with Nu-Wall.', 
    image: require('@/assets/images/nw-window.jpg') });

  data.push({ title: 'External Corner', 
    text: 'Builder trainer Matt goes through an external corner installation.', 
    image: require('@/assets/images/nw-corner.jpg') });

  return (
    <>
      {data.map((item, index) => (
        <Card key={index} header={Header(item)} onPress={() => setVisible(true)}>
          <View style={styles.cardHeader}>
            <Text category='h6'>
              {item.title}
            </Text>
            <Text category='s1'>
              By Matt
            </Text>
          </View>
          <Text>
            {item.text}
          </Text>
        </Card>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex:1,
    width:'100%',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cardModel: {
    flex: 1,
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto'
  },
  backgroundImage : {
    flex: 1,
    width: undefined,
    height: 100,
  },
  cardHeader : {
    marginBottom:10
  }
});
