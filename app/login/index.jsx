import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from './../../constants/Colors'

import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {

  useWarmUpBrowser()
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      })

      // If sign in was successful, set the active session
      if (createdSessionId) {
        
      } else {
        // Use signIn or signUp returned from startOAuthFlow
        // for next steps, such as MFA
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }, [])




  return (
    <View 
    style = {{
      backgroundColor:Colors.WHITE,
      height: '100%'
    }}
    >
      <Image source={require('./../../assets/images/adoptme.jpg')}
      style={{
        width: '100%',
        height: 500
      }}
      />

      <View style={{
        padding: 30,
        display: 'flex',
        textItems: 'center'
      }}>
        <Text style={{
          fontFamily: 'poppins-semibold',
          fontSize: 30,
          textAlign: 'center'
        }}> Ready to make a new friend? </Text>
      </View>

      <Text style={{
          fontFamily: 'poppins',
          fontSize: 15,
          textAlign: 'center',
          color:Colors.GRAY
        }}> Let's adobpt a cute furry puppy now! 
        </Text>

        <Pressable 
        onPress={onPress}
        style={{
          padding: 14,
          margin: 100,
          marginTop: 50,
          backgroundColor:Colors.PRIMARY
          
        }} >
          <Text 
          style={{
           textAlign: 'center',
           fontFamily: 'poppins-semibold'
          }}
          >
          Get Started →
          </Text>
        </Pressable>
      
    </View>
  )
}