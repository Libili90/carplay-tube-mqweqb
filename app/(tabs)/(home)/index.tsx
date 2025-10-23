
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors } from '@/styles/commonStyles';
import { launchYouTube, launchYouTubeSearch } from '@/utils/youtube';

export default function HomeScreen() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenYouTube = () => {
    console.log('Open YouTube button pressed');
    launchYouTube();
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery}`);
      launchYouTubeSearch(searchQuery);
      setSearchQuery('');
    }
  };

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: 'YouTube',
            headerLargeTitle: false,
          }}
        />
      )}
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
        edges={['top']}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            Platform.OS !== 'ios' && styles.scrollContentWithTabBar,
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* YouTube Logo/Header */}
          <View style={styles.header}>
            <View style={styles.youtubeLogoContainer}>
              <Text style={styles.youtubeLogoText}>▶</Text>
            </View>
            <Text style={styles.appTitle}>YouTube</Text>
            <Text style={styles.appSubtitle}>CarPlay Ready</Text>
          </View>

          {/* Main Launch Button */}
          <Pressable
            style={({ pressed }) => [
              styles.mainButton,
              { backgroundColor: colors.primary },
              pressed && styles.mainButtonPressed,
            ]}
            onPress={handleOpenYouTube}
          >
            <IconSymbol name='play.fill' size={48} color={colors.text} />
            <Text style={styles.mainButtonText}>Open YouTube</Text>
          </Pressable>

          {/* Search Section */}
          <View style={styles.searchSection}>
            <Text style={styles.sectionTitle}>Search YouTube</Text>
            <View
              style={[
                styles.searchContainer,
                { backgroundColor: colors.card, borderColor: colors.secondary },
              ]}
            >
              <IconSymbol
                name='magnifyingglass'
                size={20}
                color={colors.textSecondary}
              />
              <TextInput
                style={[styles.searchInput, { color: colors.text }]}
                placeholder='Search videos...'
                placeholderTextColor={colors.textSecondary}
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
                returnKeyType='search'
              />
            </View>
            <Pressable
              style={({ pressed }) => [
                styles.searchButton,
                { backgroundColor: colors.primary },
                pressed && styles.searchButtonPressed,
              ]}
              onPress={handleSearch}
              disabled={!searchQuery.trim()}
            >
              <Text style={styles.searchButtonText}>Search</Text>
            </Pressable>
          </View>

          {/* Quick Links */}
          <View style={styles.quickLinksSection}>
            <Text style={styles.sectionTitle}>Quick Links</Text>
            <View style={styles.quickLinksGrid}>
              <Pressable
                style={({ pressed }) => [
                  styles.quickLink,
                  { backgroundColor: colors.card },
                  pressed && styles.quickLinkPressed,
                ]}
                onPress={() => launchYouTubeSearch('trending')}
              >
                <IconSymbol
                  name='flame.fill'
                  size={32}
                  color={colors.primary}
                />
                <Text style={styles.quickLinkText}>Trending</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.quickLink,
                  { backgroundColor: colors.card },
                  pressed && styles.quickLinkPressed,
                ]}
                onPress={() => launchYouTubeSearch('music')}
              >
                <IconSymbol
                  name='music.note'
                  size={32}
                  color={colors.primary}
                />
                <Text style={styles.quickLinkText}>Music</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.quickLink,
                  { backgroundColor: colors.card },
                  pressed && styles.quickLinkPressed,
                ]}
                onPress={() => launchYouTubeSearch('gaming')}
              >
                <IconSymbol
                  name='gamecontroller.fill'
                  size={32}
                  color={colors.primary}
                />
                <Text style={styles.quickLinkText}>Gaming</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.quickLink,
                  { backgroundColor: colors.card },
                  pressed && styles.quickLinkPressed,
                ]}
                onPress={() => launchYouTubeSearch('sports')}
              >
                <IconSymbol
                  name='sportscourt.fill'
                  size={32}
                  color={colors.primary}
                />
                <Text style={styles.quickLinkText}>Sports</Text>
              </Pressable>
            </View>
          </View>

          {/* Info Section */}
          <View style={styles.infoSection}>
            <Text style={styles.infoText}>
              🚗 Optimized for CarPlay and safe driving
            </Text>
            <Text style={styles.infoText}>
              Tap the main button to open YouTube or search for videos
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'center',
  },
  scrollContentWithTabBar: {
    paddingBottom: 120,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  youtubeLogoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    boxShadow: '0px 4px 12px rgba(255, 0, 0, 0.3)',
    elevation: 8,
  },
  youtubeLogoText: {
    fontSize: 40,
    color: colors.text,
    fontWeight: 'bold',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  mainButton: {
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    boxShadow: '0px 8px 24px rgba(255, 0, 0, 0.4)',
    elevation: 12,
  },
  mainButtonPressed: {
    opacity: 0.8,
  },
  mainButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 12,
  },
  searchSection: {
    width: '100%',
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: colors.text,
  },
  searchButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonPressed: {
    opacity: 0.8,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  quickLinksSection: {
    width: '100%',
    marginBottom: 32,
  },
  quickLinksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  quickLink: {
    width: '48%',
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
    elevation: 4,
  },
  quickLinkPressed: {
    opacity: 0.7,
  },
  quickLinkText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginTop: 8,
  },
  infoSection: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: colors.card,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
    lineHeight: 20,
  },
});
