// Dialog.js

// List of system function words
export const systemFunctionWords = ["clear"];

// List of happy words
export const happyWords = ["happy", "joyful", "excited", "fun"];

// List of sad words
export const sadWords = ["sad", "unhappy", "depressed", "miserable"];

// List of responses for different moods
export const happyResponses = ["That's great!", "I'm glad to hear that!", "Sounds like a lot of fun!"];
export const sadResponses = ["I'm sorry to hear that.", "Cheer up!", "Things will get better."];
export const neutral = ["I'm sorry, I couldn't detect your mood."];
export const systemFunctionResponses = "chat log cleared successfully!";

// Function to generate a random response based on the detected mood
export function generateResponse(message) {

let mood = ""; // Variable to store the detected mood

// Check if the message is a system function
if (systemFunctionWords.some(word => message.includes(word))) {
  mood = 'systemFunction';
  }
  // Check if any happy words are present in the message
  else if (happyWords.some(word => message.includes(word))) {
    mood = "happy";
  }
  // Check if any sad words are present in the message
  else if (sadWords.some(word => message.includes(word))) {
    mood = "sad";
  }
  else {
    mood = "neutral";
  }

  // Generate a random response based on the detected mood
  if (mood === "happy") {
    return happyResponses[Math.floor(Math.random() * happyResponses.length)];
  } else if (mood === "sad") {
    return sadResponses[Math.floor(Math.random() * sadResponses.length)];
  } else if (mood === 'systemFunction') {
    return systemFunctionResponses;
  } else if (mood === "neutral"){
    return neutral[Math.floor(Math.random() * neutral.length)];
  }
}
