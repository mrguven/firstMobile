import { Image, StyleSheet, Platform,Button, ScrollView, SafeAreaView, useColorScheme } from 'react-native';


import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
//import { useTranslation } from 'react-i18next';


export default function SalahTime() {
   // const { t } = useTranslation();
    interface Data {
        userId: number,
id: number,
title: string,
body: string
      }
      interface Data1 {
        userId: number,
id: number,
title: string,
body: string
      }
    
      const [data, setData] = useState<Data | null>(null);
      const [data1, setData1] = useState<AxiosResponse | null | void>(null);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const json = await response.json();
            setData(json);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }

          await axios('https://jsonplaceholder.typicode.com/posts/2')
          .then(data=>setData1(data))
          .catch(err=>console.log(err))

        };
    
        fetchData();
      }, []);
    
      if (loading) {
        return <ActivityIndicator />;
      }
    
     
function onPressLearnMore(){

}

  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.titleContainer}>
        <Text>Welcome!</Text>
        <Header />
      </View>
      <View style={styles.stepContainer}>
        <Text>Step 1: Try it</Text>
        <Text>
          Edit <Text>Namaz Vakitleri</Text> 
          <Text>
      {/* {t("screens.intro.text.login")} sdfdsf */}
      </Text>
          Press{' '}
          <Text>
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </Text>{' '}
          to open developer tools.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text>Time</Text>
        <Text>
          Namaz Vakitleri
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text>Step 3: Get a fresh start</Text>
        <Text>
          When you're ready, run{' '}
          <Text>npm run reset-project</Text> to get a fresh{' '}
          <Text>app</Text> directory. This will move the current{' '}
          <Text>app</Text> to{' '}
          <Text>app-example</Text>.
          <Text>Hello world</Text>.
        
        </Text>
     
      </View>
      <View>
      {data ? <Text>{data.userId}</Text> : <Text>No data found</Text>}
      {data ? <Text>{data.title}</Text> : <Text>No data found</Text>}
      {data ? <Text>{data.body}</Text> : <Text>No data found</Text>}
    </View>


      <Button
  onPress={onPressLearnMore}
  title="Bir sehir secin"
  color="#841584"
  accessibilityLabel="Bir sehir secin"
/>
    </ScrollView>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
