import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import { View, ViewProps  } from 'react-native';
export const NewsList = (): React.ReactElement => {
  const theme = useColorScheme() ?? 'light';
  interface DataItem {
    title: string;
    by: string;
    message: string;
  }

  const Header = (item : DataItem): React.ReactElement => (
    <View>
      <Text category='h6'>
        {item.title}
      </Text>
      <Text category='s1'>
        By {item.by}
      </Text>
    </View>
  );

  const data: DataItem[] = [];
  data.push({ title: 'New Product Annocument', by: 'Nu-Wall Team on 2/07/2024', message: 'The Nu-Wall team is happy to announce a new rain screen.' });
  data.push({ title: 'Change to Minimum Clearance', by: 'Nu-Wall Team on 5/06/2024', message: 'Minimum clearance has changed from 20mm to 50mm.' });

  return (
    <>
      {data.map((item, index) => (
        <Card key={index} header={Header(item)}>
          <Text>
            {item.message}
          </Text>
        </Card>
      ))}
      </>
  );
}

const styles = StyleSheet.create({
});
