import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {REACT_APP_salahTimeToken} from '@env';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function ReqApi() {
  const [data, setData] = useState(null);
  const [time, setTime] = useState();
  const [salahTime, setSalahTime] = useState();
  const [loading, setLoading] = useState(true);
  const [text, setChangeText] = useState('Useless Text');
  const [imageList, setImageList] = useState([
    {src: require('../assets/images/1.jpg'), id: 1},
    {src: require('../assets/images/1.jpg'), id: 2},
    {src: require('../assets/images/1.jpg'), id: 3},
    {src: require('../assets/images/1.jpg'), id: 4},
  ]);
  const [imageList1, setImageList1] = useState([
    {src: require('../assets/images/1.jpg'), id: 1},
    {src: require('../assets/images/1.jpg'), id: 2},
    {src: require('../assets/images/1.jpg'), id: 3},
    {src: require('../assets/images/1.jpg'), id: 4},
  ]);
  
  useEffect(() => {
    const fetchData = async () => {
         try {
        const response1 = await fetch(
          'https://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2',
        );
        const json1 = await response1.json();
        setSalahTime(json1);
        console.log(salahTime);
        console.log(json1.data, 'timing json');
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }

      //   try {
      //     const response1 = await fetch('https://api.collectapi.com/pray/all?data.city=istanbul'
      //         ,{
      //         headers:{
      //              'Authorization': `${REACT_APP_salahTimeToken}`,
      //              "content-type": "application/json"
      //         }
      //     }
      // );
      //     // const json1= await response1.json();
      //     setSalahTime(response1);
      //   } catch (error) {
      //     console.error(error);
      //   } finally {
      //     setLoading(false);
      //   }
      //  console.log(salahTime);
    };
    let newtime = new Date().toLocaleTimeString();

    setTime(newtime);
    console.log(time);
    fetchData();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>{time && time}</Text>
      {data ? <Text>{data.userId}</Text> : <Text>No data found</Text>}
      {data ? <Text>{data.title}</Text> : <Text>No data found</Text>}
      {data ? (
        <Text style={styles.demo}>{data.body}</Text>
      ) : (
        <Text>No data found</Text>
      )}

      {/* {salahTime ? <Text>{salahTime.data[0].timings.Fajr}</Text> : <Text>No data found</Text>} */}
      {imageList && (
        <FlatList
          data={imageList}
          renderItem={({item}) => (
            <Image source={item.src} style={styles.image} />
          )}
          keyExtractor={item => item.id}
        />
      )}

      {/* {imageList &&  imageList.map((img,i=index)=> {
       return(<><Image source={img}  style={styles.image} index={i}/>
        <Text>{i}</Text></>
       ) 
      })  } */}
      <TextInput
        style={styles.input}
        onChangeText={setChangeText}
        value={text}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
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
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: '60%',
    height: 300,
    margin: 10,
  },
});
