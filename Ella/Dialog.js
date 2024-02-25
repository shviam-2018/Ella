// Dialog.js

// List of system functions

// Function to clear chat log
export const clearFunction = "clear";

// Function to see info about Ella
export const infoFunction = "whoami";

// List of happy words
export const happyWords = ["happy", "joyful", "excited", "fun", "awesome", "fantastic", "amazing", "ecstatic", "delighted", "thrilled", "overjoyed", "blissful"];

// List of sad words
export const sadWords = ["sad", "unhappy", "depressed", "miserable", "down", "blue", "low", "gloomy", "heartbroken", "tearful", "disheartened", "despondent"];

// List of angry words
export const angryWords = ["angry", "frustrated", "irritated", "annoyed", "mad", "upset", "enraged", "furious", "livid", "incensed", "outraged", "irate"];

// List of depressed words
export const depressedWords = ["depressed", "despair", "hopeless", "gloomy", "melancholy", "downhearted", "disconsolate", "desolate", "wretched", "crestfallen", "forlorn", "sorrowful"];

// List of neutral prompts to guide the conversation
export const neutralPrompts = ["How was your day?", "Tell me about something interesting that happened recently.", "What's on your mind today?", "Any plans for the weekend?", "Seen any good movies lately?", "How's work/school going?"];

// Responses for different moods
export let happyResponses = ["That's great!", "I'm glad to hear that!", "Sounds like a lot of fun!", "You're on fire!", "Keep the positivity going!", "Way to go!", "You're unstoppable!", "I'm doing a happy dance for you!", "That's fantastic news!", "You deserve all the happiness!"];
export let sadResponses = ["I'm sorry to hear that.", "Cheer up!", "Things will get better.", "I'm here for you.", "Sending virtual hugs your way.", "Hang in there!", "You're stronger than you think.", "Tomorrow is a new day!", "It's okay to not be okay.", "I'm just a message away if you need to talk."];
export let angryResponses = ["Take a deep breath.", "Let's try to find a solution.", "Vent it out, I'm here to listen.", "Things will get better, stay strong.", "Count to ten before reacting.", "Try to find some calm amidst the storm.", "This too shall pass.", "You're justified in feeling this way.", "Let's work through this together.", "I'm here to support you."];
export let depressedResponses = ["I'm here for you.", "You're not alone.", "It's okay to feel this way, but remember, things can improve.", "Would you like to talk about what's bothering you?", "Take your time, I'm here to listen.", "You're stronger than you realize.", "You're not defined by your feelings.", "I believe in you, even when you don't.", "Let's focus on small victories.", "Sending you strength and warmth."];

// Response for system functions
export const clearFunctionResponses = "Chat log cleared successfully!";

export const infoFunctionResponses = 
"Version: 1.0.1\n" +
"Author: NightDev4l\n" +
"Description: Ella is a chatbot designed to provide emotional support and engage in meaningful conversations. She can detect your mood and respond accordingly. Ella is here to listen, offer comfort, and provide a safe space for you to express yourself. Feel free to share your thoughts, feelings, or anything you'd like to talk about. Remember, you're not alone. I'm here for you.\n" +
"Website: https://nightdev4l.web.app/";

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle responses for each mood
shuffleArray(happyResponses);
shuffleArray(sadResponses);
shuffleArray(angryResponses);
shuffleArray(depressedResponses);

// Keep track of used responses
let usedHappyResponses = [];
let usedSadResponses = [];
let usedAngryResponses = [];
let usedDepressedResponses = [];

// Function to generate a random response based on the detected mood
export function generateResponse(message) {
  let mood = ""; // Variable to store the detected mood

  // Check if the message is a system function
  if (message.includes(clearFunction)) {
    mood = 'clearFunction';
  } 
  else if (message.includes(infoFunction)) {
    mood = 'infoFunction';
  }
  // Check if any happy words are present in the message
  else if (happyWords.some(word => message.includes(word))) {
    mood = "happy";
  }
  // Check if any sad words are present in the message
  else if (sadWords.some(word => message.includes(word))) {
    mood = "sad";
  }
  // Check if any angry words are present in the message
  else if (angryWords.some(word => message.includes(word))) {
    mood = "angry";
  } 
  // Check if any depressed words are present in the message
  else if (depressedWords.some(word => message.includes(word))) {
    mood = "depressed";
  } 
  // If no specific mood detected, check for neutral prompts
  else {
    mood = "neutral";
  }

  // Generate a random response based on the detected mood
  if (mood === "happy") {
    if (usedHappyResponses.length === happyResponses.length) {
      shuffleArray(happyResponses);
      usedHappyResponses = [];
    }
    const responseIndex = Math.floor(Math.random() * happyResponses.length);
    const response = happyResponses[responseIndex];
    usedHappyResponses.push(response);
    return response;
  } else if (mood === "sad") {
    if (usedSadResponses.length === sadResponses.length) {
      shuffleArray(sadResponses);
      usedSadResponses = [];
    }
    const responseIndex = Math.floor(Math.random() * sadResponses.length);
    const response = sadResponses[responseIndex];
    usedSadResponses.push(response);
    return response;
  } else if (mood === "angry") {
    if (usedAngryResponses.length === angryResponses.length) {
      shuffleArray(angryResponses);
      usedAngryResponses = [];
    }
    const responseIndex = Math.floor(Math.random() * angryResponses.length);
    const response = angryResponses[responseIndex];
    usedAngryResponses.push(response);
    return response;
  } else if (mood === "depressed") {
    if (usedDepressedResponses.length === depressedResponses.length) {
      shuffleArray(depressedResponses);
      usedDepressedResponses = [];
    }
    const responseIndex = Math.floor(Math.random() * depressedResponses.length);
    const response = depressedResponses[responseIndex];
    usedDepressedResponses.push(response);
    return response;
  } else if (mood === 'clearFunction') {
    return clearFunctionResponses;
  } else if (mood === 'infoFunction'){
    return infoFunctionResponses;
  
  }else if (mood === "neutral"){
    return neutralPrompts[Math.floor(Math.random() * neutralPrompts.length)];
  }
}