import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'zzz',
          tabBarIcon: ({ color }) => <Feather name="moon" size={25}  color={color} />,
        }}
      />
      <Tabs.Screen
        name="music"
        options={{
          title: 'Music',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cross-outline" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="tlou"
        options={{
          title: 'TLOU',
          tabBarIcon: ({ color }) => <AntDesign name="spotify" size={25} color={color} />
        }}
      />
      <Tabs.Screen
        name="fashion"
        options={{
          title: 'Fashion',
          tabBarIcon: ({ color }) => <Ionicons name="sparkles-outline" size={25} color={color} />
        }}
      />
    </Tabs>
  );
}
