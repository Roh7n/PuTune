import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function LibraryLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false }}  />
      </Stack>
    </>
  )
}
