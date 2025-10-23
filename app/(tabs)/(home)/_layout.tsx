
import { Stack } from 'expo-router';
import { colors } from '@/styles/commonStyles';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.primary,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.text,
        },
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'YouTube',
        }}
      />
    </Stack>
  );
}
