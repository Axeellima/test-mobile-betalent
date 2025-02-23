const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const {assetExts, sourceExts} = getDefaultConfig(__dirname);
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
