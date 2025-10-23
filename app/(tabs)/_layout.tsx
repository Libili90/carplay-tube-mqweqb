
import React from 'react';
import { Platform } from 'react-native';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  // Define the tabs configuration
  const tabs: TabBarItem[] = [
    {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'play.circle.fill',
      label: 'YouTube',
    },
    {
      name: 'profile',
      route: '/(tabs)/profile',
      icon: 'info.circle.fill',
      label: 'About',
    },
  ];

  // Use NativeTabs for iOS, custom FloatingTabBar for Android and Web
  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name='(home)'>
          <Icon sf='play.circle.fill' drawable='ic_home' />
          <Label>YouTube</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name='profile'>
          <Icon sf='info.circle.fill' drawable='ic_profile' />
          <Label>About</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  // For Android and Web, use Stack navigation with custom floating tab bar
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name='(home)' />
        <Stack.Screen name='profile' />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
