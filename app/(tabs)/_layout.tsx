import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.text,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={Colors.dark.icon} />
          ),
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          title: 'Training Videos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'videocam-outline'} color={Colors.dark.icon} />
          ),
        }}
      />
      <Tabs.Screen
        name="installation"
        options={{
          title: 'Installation Videos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'camera-reverse-outline'} color={Colors.dark.icon} />
          ),
        }}
      />
    </Tabs>
  );
}
