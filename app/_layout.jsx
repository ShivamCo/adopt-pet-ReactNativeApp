import { useFonts } from "expo-font";
import { tokenCache } from '@/cache'
import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY


export default function RootLayout(){
    useFonts({
        'poppins': require("./../assets/fonts/Poppins-Regular.ttf"),
        'poppins-semibold': require("./../assets/fonts/Poppins-SemiBold.ttf")
    })


    return(
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
        <ClerkLoaded>
        <Stack>
            <Stack.Screen name="Index" />
            <Stack.Screen name="(tabs)" 
            options={{
                headerShown: false}} />
            <Stack.Screen name="login/index" options={{
                headerShown: false
            }} />
            
        </Stack>
        </ClerkLoaded>
        </ClerkProvider>
    )

}