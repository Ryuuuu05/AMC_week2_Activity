import React from 'react';
import {View, Text,Image,ScrollView,TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView
    style={{
      alignItems: 'center',  
    }}
    >
    <center><Text>Carl Justine Pestano</Text></center>
    <View>
    <center><Text> IT-302 </Text></center>
    <Image
    source={{
      uri:'https://th.bing.com/th/id/R.2436bfd57f8da9d3352be6d9c69f7d0d?rik=9ZCsDkOmNhWhyQ&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f04%2fbest-scenery-wallpaper-scenery-images.jpg&ehk=QhEgBXlBIdu4NBBKeTvxOQncAMHrLokkC8ustgaeB9c%3d&risl=&pid=ImgRaw&r=0',
    }}
    style={{width:200, height:200}}
    />
    </View>
    <TextInput
    style={{
      height:40,
      borderColor: 'gray',
      borderwidth: 1,
      textAlign: 'center',
    }}
    defaultValue="You can Type in me"/>
   </ScrollView> 
  );
};

export default App;
