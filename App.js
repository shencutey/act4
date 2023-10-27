import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Switch,
  Picker,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyComponent = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedPickerValue, setSelectedPickerValue] = useState('Option 1');
  const [showText, setShowText] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [showScrollView, setShowScrollView] = useState(false);
  const [showFlatList, setShowFlatList] = useState(false);
  const [showSectionList, setShowSectionList] = useState(false);
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const [showTouchableHighlight, setShowTouchableHighlight] = useState(false);
  const [showTouchableOpacity, setShowTouchableOpacity] = useState(false);
  const [showSwitch, setShowSwitch] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const sections = [
    {
      title: 'Section 1',
      data: ['Item 1', 'Item 2'],
    },
    {
      title: 'Section 2',
      data: ['Item 3', 'Item 4'],
    },
  ];

  const toggleIcon = () => {
    setShowIcon(!showIcon);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Toggle Text" onPress={() => setShowText(!showText)} color="blue" />
      {showText && <Text>Hello, World!</Text>}

      <Button title="Toggle TextInput" onPress={() => setShowTextInput(!showTextInput)} color="green" />
      {showTextInput && (
        <TextInput
          placeholder="Enter text"
          value={textInputValue}
          onChangeText={(text) => setTextInputValue(text)}
        />
     ) }

      <Button title="Toggle ScrollView" onPress={() => setShowScrollView(!showScrollView)} color="orange" />
      {showScrollView && (
        <ScrollView>
          <Text>Scrollable content goes here</Text>
        </ScrollView>
      ) }

      <Button title="Toggle FlatList" onPress={() => setShowFlatList(!showFlatList)} color="purple" />
      {showFlatList && (
        <FlatList
          data={[
            { key: 'item1' },
            { key: 'item2' },
          ]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      )}

      <Button title="Toggle SectionList" onPress={() => setShowSectionList(!showSectionList)} color="red" />
      {showSectionList && (
        <SectionList
          sections={sections}
          renderItem={({ item }) => <Text>{item}</Text>}
          renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        />
     ) }

      <Button title="Toggle ActivityIndicator" onPress={() => setShowActivityIndicator(!showActivityIndicator)} color="pink" />
      {showActivityIndicator && <ActivityIndicator size="large" color="#0000ff" />}

      <Button title="Toggle TouchableHighlight" onPress={() => setShowTouchableHighlight(!showTouchableHighlight)} color="teal" />
      {showTouchableHighlight && (
        <TouchableHighlight onPress={() => alert('Touchable Highlight pressed')}>
          <Text>Touchable Highlight</Text>
        </TouchableHighlight>
      )}

      <Button title="Toggle TouchableOpacity" onPress={() => setShowTouchableOpacity(!showTouchableOpacity)} color="cyan" />
      {showTouchableOpacity && (
        <TouchableOpacity onPress={() => alert('Touchable Opacity pressed')}>
          <Text>Touchable Opacity</Text>
        </TouchableOpacity>
     ) }

      <Button title="Toggle Modal" onPress={() => setModalVisible(!modalVisible)} color="magenta" />
      {modalVisible && (
        <Modal visible={modalVisible}>
          <Text>Modal Content</Text>
          <Button title="Close Modal" onPress={() => setModalVisible(false)} />
        </Modal>
      )}

      <Button title="Toggle Switch" onPress={() => setShowSwitch(!showSwitch)} color="lime" />
      {showSwitch && (
        <Switch
          value={switchValue}
          onValueChange={(value) => setSwitchValue(value)}
        />
     ) }

      <Button title="Toggle Picker" onPress={() => setShowPicker(!showPicker)} color="indigo" />
      {showPicker && (
        <Picker selectedValue={selectedPickerValue} onValueChange={(itemValue) => setSelectedPickerValue(itemValue)}>
          <Picker.Item label="Option 1" value="Option 1" />
          <Picker.Item label="Option 2" value="Option 2" />
        </Picker>
     ) }

      <Button title="Toggle StatusBar" onPress={() => setShowStatusBar(!showStatusBar)} color="brown" />
      {showStatusBar && <StatusBar backgroundColor="#ff0000" barStyle="light-content" />}

      <Button title="Toggle Image" onPress={() => setShowImage(!showImage)} color="violet" />
      {showImage && (
        <Image
          source={{ uri: 'https://www.example.com/image.jpg' }}
          style={{ width: 200, height: 200 }}
        />
     ) }

      <Button title={showIcon ? "Hide Icon" : "Show Icon"} onPress={toggleIcon} color="yellow" />
      {showIcon && <Icon name="fire" size={30} color="red" />}
    </View>
  );
};

export default MyComponent;
