import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { generateResponse, happyWords, sadWords } from './Dialog';

export default function App() {
  const [inputText, setInputText] = useState(''); // State to store user input
  const [chatHistory, setChatHistory] = useState([]); // State to store chat history

  const handleSendMessage = () => {
    const userMessage = { sender: 'user', message: inputText }; // Creating user message object
    let updatedChatHistory = [...chatHistory, userMessage]; // Updating chat history with user message 

    // Checking for happy words in the input text
    if (happyWords.some(word => inputText.toLowerCase().includes(word))) {
      const botResponse = { sender: 'bot', message: generateResponse('happy') }; // Generating response for happy mood
      updatedChatHistory = [...updatedChatHistory, botResponse]; // Adding bot response to chat history
    }
    // Checking for sad words in the input text
    else if (sadWords.some(word => inputText.toLowerCase().includes(word))) {
      const botResponse = { sender: 'bot', message: generateResponse('sad') }; // Generating response for sad mood
      updatedChatHistory = [...updatedChatHistory, botResponse]; // Adding bot response to chat history
    }
    
    setChatHistory(updatedChatHistory); // Updating chat history
    setInputText(''); // Clearing the input text
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chatHistory}
        renderItem={({ item }) => (
          <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
            <Text>{item.message}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
    justifyContent: 'flex-end',
    padding: 20,
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
