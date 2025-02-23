import {StatusBar, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
  },
});
