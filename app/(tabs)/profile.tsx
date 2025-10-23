
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { useTheme } from '@react-navigation/native';
import { colors } from '@/styles/commonStyles';

export default function ProfileScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
      edges={['top']}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS !== 'ios' && styles.contentContainerWithTabBar,
        ]}
      >
        <View
          style={[
            styles.profileHeader,
            { backgroundColor: colors.card, borderColor: colors.secondary },
          ]}
        >
          <IconSymbol
            name='play.circle.fill'
            size={80}
            color={colors.primary}
          />
          <Text style={[styles.name, { color: colors.text }]}>YouTube</Text>
          <Text style={[styles.email, { color: colors.textSecondary }]}>
            CarPlay Edition
          </Text>
        </View>

        <View
          style={[
            styles.section,
            { backgroundColor: colors.card, borderColor: colors.secondary },
          ]}
        >
          <View style={styles.infoRow}>
            <IconSymbol
              name='info.circle.fill'
              size={20}
              color={colors.primary}
            />
            <Text style={[styles.infoText, { color: colors.text }]}>
              Version 1.0.0
            </Text>
          </View>
          <View style={styles.infoRow}>
            <IconSymbol
              name='checkmark.circle.fill'
              size={20}
              color={colors.primary}
            />
            <Text style={[styles.infoText, { color: colors.text }]}>
              Optimized for CarPlay
            </Text>
          </View>
          <View style={styles.infoRow}>
            <IconSymbol
              name='star.fill'
              size={20}
              color={colors.primary}
            />
            <Text style={[styles.infoText, { color: colors.text }]}>
              Safe Driving Mode
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.section,
            { backgroundColor: colors.card, borderColor: colors.secondary },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Features
          </Text>
          <Text style={[styles.featureText, { color: colors.textSecondary }]}>
            • Quick access to YouTube
          </Text>
          <Text style={[styles.featureText, { color: colors.textSecondary }]}>
            • Search videos directly
          </Text>
          <Text style={[styles.featureText, { color: colors.textSecondary }]}>
            • Trending, Music, Gaming, Sports quick links
          </Text>
          <Text style={[styles.featureText, { color: colors.textSecondary }]}>
            • Dark theme for safe driving
          </Text>
        </View>

        <View
          style={[
            styles.section,
            { backgroundColor: colors.card, borderColor: colors.secondary },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Tips
          </Text>
          <Text style={[styles.featureText, { color: colors.textSecondary }]}>
            🚗 Use this app safely while driving. Always keep your eyes on the
            road.
          </Text>
          <Text style={[styles.featureText, { color: colors.textSecondary }]}>
            📱 For best experience, use voice commands when available.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  profileHeader: {
    alignItems: 'center',
    borderRadius: 12,
    padding: 32,
    marginBottom: 16,
    gap: 12,
    borderWidth: 1,
    boxShadow: '0px 4px 12px rgba(255, 0, 0, 0.2)',
    elevation: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
  },
  section: {
    borderRadius: 12,
    padding: 20,
    gap: 12,
    marginBottom: 16,
    borderWidth: 1,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoText: {
    fontSize: 16,
  },
  featureText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
});
