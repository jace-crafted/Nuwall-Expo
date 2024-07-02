import React from 'react';
import { ImageSourcePropType, StyleSheet, useColorScheme } from 'react-native';
import { Card, Text, Modal, Layout, Button } from '@ui-kitten/components';
import { Image  } from 'react-native';

export const InstallationVideosList = (): React.ReactElement => {
  const theme = useColorScheme() ?? 'light';
  const [visible, setVisible] = React.useState(false);
  interface DataItem {
    title: string;
    link: string;
    image: ImageSourcePropType;
  }

  const Header = (data : DataItem): React.ReactElement => (
    <>
      <Image
        source={data.image}
        style={styles.backgroundImage}
      />
    </>
  );

  const data: DataItem[] = [];
  data.push({ title: 'Typical external 90 corner', image: require('@/assets/images/vertical-negative-107x-external-corner-3d.jpg'), link: 'https://workingspec.com/embed/nw-voc-extc2' });
  data.push({ title: 'Typical soffit trim', image: require('@/assets/images/vertical-std-soffit-3d.jpg'), link: 'https://workingspec.com/embed/nw-voc-sof' });

  return (
    <>
      <Layout
        style={styles.container}
        level='1'
      >
          {data.map((item, index) => (
            <Card key={index} header={Header(item)} style={styles.card} onPress={() => setVisible(true)}>
              <Text category='h6' style={styles.cardHeader}>
                {item.title}
              </Text>
            </Card>
          ))}
      </Layout>
      <Modal
        style={styles.modal}
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true} style={styles.cardModel}>
          
          <Button onPress={() => setVisible(false)}>
            Close
          </Button>
        </Card>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex:1,
    width:'100%',
  },
  cardModel: {
    flex: 1,
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto'
  },
  card: {
    width: '48%',
    marginHorizontal: '1%',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  backgroundImage : {
    flex: 1,
    width: undefined,
    height: 100,
  },
  cardHeader : {
    height:70,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
