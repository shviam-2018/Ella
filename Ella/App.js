import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { generateResponse, happyWords, sadWords } from './Dialog';

export default function App() {
  const [inputText, setInputText] = useState(''); // State to store user input
  const [chatHistory, setChatHistory] = useState([]); // State to store chat history
  let BotName = "Ella"; // Bot's name

  const handleSendMessage = () => {
    const userMessage = { sender: 'user', message: inputText }; // Creating user message object
    let updatedChatHistory = [...chatHistory, userMessage]; // Updating chat history with user message 

    // for development clear chat log
    if (inputText.toLowerCase() === 'clear') {
      const botResponse = { sender: BotName, message: 'chat log cleared successfully!' }; // Generating response for happy mood
      updatedChatHistory = [botResponse]; // Adding bot response to chat history
    }
    // Checking for happy words in the input text
    if (happyWords.some(word => inputText.toLowerCase().includes(word))) {
      const botResponse = { sender: BotName, message: generateResponse('happy') }; // Generating response for happy mood
      updatedChatHistory = [...updatedChatHistory, botResponse]; // Adding bot response to chat history
    }
    // Checking for sad words in the input text
    else if (sadWords.some(word => inputText.toLowerCase().includes(word))) {
      const botResponse = { sender: BotName, message: generateResponse('sad') }; // Generating response for sad mood
      updatedChatHistory = [...updatedChatHistory, botResponse]; // Adding bot response to chat history
    }
    
    setChatHistory(updatedChatHistory); // Updating chat history
    setInputText(''); // Clearing the input text
  };

  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <Image source={require('./assets/NightDev4l-logos.jpeg')} style={styles.dp} />
        <Text style={styles.headerText}> {BotName} </Text>
        {/* You can add more components/buttons here for call and video options */}
      </View>
      
      {/* Chat Content */}
      <View style={styles.chatContent}>
        <FlatList 
          data={chatHistory}
          renderItem={({ item }) => (
            <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}> 
              <Text>{item.message}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      
      {/* Input Container */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 27, 
    justifyContent: 'flex-end',
    padding: 20,
  },
  dp: {
    width: 36,
    height: 36,
    borderRadius: 50,
    borderWidth: 2, 
    borderColor: '#4B0082',
  },
  header: {
    height: 60, 
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, 
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatContent: {
    flex: 1,
    marginTop: 11, 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  sendButtonText: {
    color: 'white',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#e5e5e5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#d5e8d4',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
});
