import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor:'#ffd33d',
        headerStyle: {
            backgroundColor: '#25292e',
        },
        headerShown: false ,
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
            backgroundColor: '#25292e',
        },
      }}
    >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
              tabBarIcon: ({color, focused}) => (
                <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
              )    
          }}
        />
        <Tabs.Screen
          name="(library)"
          options={{
            title: 'Library',
              tabBarIcon: ({color, focused}) => (
                <Ionicons name={focused ? "library" : "library-outline"} color={color} size={24} />
              )    
          }}
        />
    </Tabs>
  );
}
