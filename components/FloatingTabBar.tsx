
import { useRouter, usePathname } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors } from '@/styles/commonStyles';

export interface TabBarItem {
  name: string;
  route: string;
  icon: string;
  label: string;
}

interface FloatingTabBarProps {
  tabs: TabBarItem[];
  containerWidth?: number;
  borderRadius?: number;
  bottomMargin?: number;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'box-none',
  },
  safeArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
    minHeight: 60,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const FloatingTabBar: React.FC<FloatingTabBarProps> = ({
  tabs,
  containerWidth = Dimensions.get('window').width - 32,
  borderRadius = 20,
  bottomMargin = 16,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const animatedIndices = tabs.map(() => useSharedValue(0));

  const handleTabPress = (route: string, index: number) => {
    console.log(`Navigating to: ${route}`);
    router.push(route);

    animatedIndices[index].value = withSpring(1, {
      damping: 0.7,
      mass: 1,
      stiffness: 100,
    });

    setTimeout(() => {
      animatedIndices[index].value = withSpring(0, {
        damping: 0.7,
        mass: 1,
        stiffness: 100,
      });
    }, 200);
  };

  return (
    <View style={styles.container} pointerEvents='box-none'>
      <SafeAreaView
        style={styles.safeArea}
        edges={['bottom']}
        pointerEvents='box-none'
      >
        <BlurView intensity={90} style={[styles.tabBar, { width: containerWidth }]}>
          {tabs.map((tab, index) => {
            const isActive = pathname.includes(tab.name);
            const animatedStyle = useAnimatedStyle(() => {
              const scale = interpolate(
                animatedIndices[index].value,
                [0, 1],
                [1, 1.1]
              );
              return {
                transform: [{ scale }],
              };
            });

            return (
              <Animated.View key={tab.name} style={animatedStyle}>
                <TouchableOpacity
                  style={[
                    styles.tabItem,
                    isActive && {
                      backgroundColor: colors.primary,
                    },
                  ]}
                  onPress={() => handleTabPress(tab.route, index)}
                  activeOpacity={0.7}
                >
                  <View style={styles.iconContainer}>
                    <IconSymbol
                      name={tab.icon}
                      size={24}
                      color={isActive ? colors.text : colors.textSecondary}
                    />
                  </View>
                  <Text
                    style={[
                      styles.tabLabel,
                      {
                        color: isActive ? colors.text : colors.textSecondary,
                      },
                    ]}
                  >
                    {tab.label}
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </BlurView>
      </SafeAreaView>
    </View>
  );
};

export default FloatingTabBar;
