import {
  Image,
  StyleSheet,
  Platform,
  Button,
  ScrollView,
  SafeAreaView,
  useColorScheme,
  TouchableHighlight,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import axios from 'axios';

export default function SalahTime() {
  // const { t } = useTranslation();
  interface Data {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  interface Data1 {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const [data, setData] = useState<Data | null>(null);
  const [data1, setData1] = useState<SalahTimeModal | null | void>(null);
  const [data2, setData2] = useState<any | null | void>(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState<number>(0);
  const [localTime, setLocalTime] = useState<string>();
  const [time, setTime] = useState<string>();
  const [timeMessage, setTimeMessage] = useState(null);
//use get request using fetch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts/1',
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    let newtime = new Date().toLocaleTimeString();

    setTime(newtime);
    console.log(time);
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  function showTimeMessage() {}

  function onPress() {
    setCount(count + 1);
  }
  function onPressLearnMore() {}

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {data ? <Text>{data.userId}</Text> : <Text>No data found</Text>}
          {data ? <Text>{data.title}</Text> : <Text>No data found</Text>}
          {data ? (
            <Text style={styles.demo}>{data.body}</Text>
          ) : (
            <Text>No data found</Text>
          )}
        </View>

        <View>
          {/* {data1 ? <Text>{data1}</Text> : <Text>No data found</Text>} */}
          <Text>{time && time}</Text>
          {data ? <Text>{data.title}</Text> : <Text>No data found</Text>}
          {data ? (
            <Text style={styles.demo}>{data.body}</Text>
          ) : (
            <Text>No data found</Text>
          )}
        </View>

        <Button
          onPress={onPressLearnMore}
          title="Bir sehir secin"
          color="#841584"
          accessibilityLabel="Bir sehir secin"
        />

        <View style={styles.container1}>
          <TouchableHighlight onPress={onPress}>
            <View style={styles.button}>
              <Text>Touch Here</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>{count || null}</Text>
          </View>
        </View>
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
  demo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});
