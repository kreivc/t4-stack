import { ConfigContext, ExpoConfig } from '@expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  extra: {
    eas: {
      projectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID || '3072fc10-8a94-479f-a086-2d794025dc2b',
    },
  },
  owner: process.env.EXPO_PUBLIC_EAS_OWNER || 'kreivc',
  plugins: ['expo-router'],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  platforms: ['ios', 'android'],
  name: 'T4 App',
  slug: 'finance-tracker',
  updates: {
    url: 'https://u.expo.dev/3072fc10-8a94-479f-a086-2d794025dc2b',
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
})
