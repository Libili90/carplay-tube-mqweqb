
import { Linking, Platform, Alert } from 'react-native';

export const launchYouTube = async () => {
  try {
    console.log('Attempting to launch YouTube...');
    
    if (Platform.OS === 'ios') {
      // Try YouTube app first on iOS
      const youtubeAppUrl = 'youtube://';
      const canOpenYoutubeApp = await Linking.canOpenURL(youtubeAppUrl);
      
      if (canOpenYoutubeApp) {
        console.log('Opening YouTube app on iOS');
        await Linking.openURL(youtubeAppUrl);
        return;
      }
      
      // Fallback to web
      const youtubeWebUrl = 'https://www.youtube.com';
      const canOpenWeb = await Linking.canOpenURL(youtubeWebUrl);
      if (canOpenWeb) {
        console.log('Opening YouTube web on iOS');
        await Linking.openURL(youtubeWebUrl);
        return;
      }
    } else if (Platform.OS === 'android') {
      // Try YouTube app first on Android
      const youtubeAppUrl = 'vnd.youtube://';
      const canOpenYoutubeApp = await Linking.canOpenURL(youtubeAppUrl);
      
      if (canOpenYoutubeApp) {
        console.log('Opening YouTube app on Android');
        await Linking.openURL(youtubeAppUrl);
        return;
      }
      
      // Fallback to web
      const youtubeWebUrl = 'https://www.youtube.com';
      const canOpenWeb = await Linking.canOpenURL(youtubeWebUrl);
      if (canOpenWeb) {
        console.log('Opening YouTube web on Android');
        await Linking.openURL(youtubeWebUrl);
        return;
      }
    } else if (Platform.OS === 'web') {
      // On web, just open YouTube
      console.log('Opening YouTube on web');
      window.open('https://www.youtube.com', '_blank');
      return;
    }
    
    // If nothing worked, show an alert
    Alert.alert(
      'YouTube Not Available',
      'Could not open YouTube. Please ensure you have a browser installed.',
      [{ text: 'OK' }]
    );
  } catch (error) {
    console.error('Error launching YouTube:', error);
    Alert.alert(
      'Error',
      'An error occurred while trying to open YouTube.',
      [{ text: 'OK' }]
    );
  }
};

export const launchYouTubeSearch = async (query: string) => {
  try {
    console.log(`Searching YouTube for: ${query}`);
    
    const encodedQuery = encodeURIComponent(query);
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodedQuery}`;
    
    if (Platform.OS === 'web') {
      window.open(youtubeSearchUrl, '_blank');
    } else {
      const canOpen = await Linking.canOpenURL(youtubeSearchUrl);
      if (canOpen) {
        await Linking.openURL(youtubeSearchUrl);
      } else {
        Alert.alert('Error', 'Could not open YouTube search');
      }
    }
  } catch (error) {
    console.error('Error launching YouTube search:', error);
    Alert.alert('Error', 'An error occurred while trying to search YouTube');
  }
};
