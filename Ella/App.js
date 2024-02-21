// App.js

import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { generateResponse, happyWords, sadWords, angryWords, depressedWords , systemFunctionWords, mood } from './Dialog';
import { styles } from './style';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const flatListRef = useRef(null); // Ref for FlatList

  let BotName = "Ella";

  const handleSendMessage = () => {
    const userMessage = { sender: 'user', message: inputText }; // Creating user message object
    let updatedChatHistory = [...chatHistory, userMessage]; // Updating chat history with user message 

    // for development clear chat log
    if (systemFunctionWords.some(word => inputText.toLowerCase().includes(word))) {
      const botResponse = { sender: BotName, message: generateResponse(inputText.toLowerCase())}; // Generating response for system function
      updatedChatHistory = [botResponse]; // Adding bot response to chat history
    }
    // Checking for happy words in the input text
    else if (happyWords.some(word => inputText.toLowerCase().includes(word))) {
      const botResponse = { sender: BotName, message: generateResponse('happy') }; // Generating response for happy mood
      updatedChatHistory = [...updatedChatHistory, botResponse]; // Adding bot response to chat history
    }
    // Checking for sad words in the input text
    else if (sadWords.some(word => inputText.toLowerCase().includes(word))) {
      const botResponse = { sender: BotName, message: generateResponse('sad') }; // Generating response for sad mood
      updatedChatHistory = [...updatedChatHistory, botResponse]; // Adding bot response to chat history
    }
    // Checking for angry words in the input text
    else if (angryWords.some(word => inputText.toLowerCase().includes(word))) {
      const botResponse = { sender: BotName, message: generateResponse('angry') }; // Generating response for angry mood
      updatedChatHistory = [...updatedChatHistory, botResponse]; // Adding bot response to chat history
    }
    // Checking for depressed words in the input text
    else if (depressedWords.some(word => inputText.toLowerCase().includes(word))) {
      const botResponse = { sender: BotName, message: generateResponse('depressed')} ; // Generating response for depressed mood
      updatedChatHistory = [...updatedChatHistory, botResponse]; // Adding bot response to chat history
    }
    else if (mood !== 'happy' && mood !== 'sad' && mood !== 'systemFunction' && mood !== 'angry' && mood !== 'depressed') {
      const botResponse = { sender: BotName, message: generateResponse('neutral') }; // Generating response for neutral mood
      updatedChatHistory = [...updatedChatHistory, botResponse]; // Adding bot response to chat history
    }
    
    setChatHistory(updatedChatHistory); // Updating chat history
    setInputText(''); // Clearing the input text
  };

  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <Image source={require('./assets/Ella.png')} style={styles.dp} />
        <Text style={styles.headerText}> {BotName} </Text>
      </View>

      {/* Chat Content */}
      <View style={styles.chatContent}>
        <FlatList
          ref={flatListRef} // Set the ref to the FlatList
          data={chatHistory}
          renderItem={({ item }) => (
            <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
              <Text>{item.message}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          // Auto-scroll on content size change
          onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
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