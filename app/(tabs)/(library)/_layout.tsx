import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function LibraryLayout() {
  return (
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false }}  />
      <StatusBar style="dark" />
    </Stack>
  )
}
