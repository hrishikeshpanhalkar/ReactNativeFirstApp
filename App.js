import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
export default function App() {
  const [people, setPeople] = useState([
    { name: 'Hrishikesh', id: '1'},
    { name: 'Tejas', id: '2'},
    { name: 'Rahul', id: '3'},
    { name: 'Ibad', id: '4'},
    { name: 'Sandhya', id: '5'},
    { name: 'Krutik', id: '6'},
    { name: 'Manav', id: '7'},
    {name: 'Aparna', id: '8'}
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList data={people}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}/>
      {/* <ScrollView>
      {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      )}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    marginBottom: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
