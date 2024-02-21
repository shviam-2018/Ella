// Dialog.js

// List of system function words
export const systemFunctionWords = ["clear"];

// List of happy words
export const happyWords = ["happy", "joyful", "excited", "fun", "awesome", "fantastic", "amazing"];

// List of sad words
export const sadWords = ["sad", "unhappy", "depressed", "miserable", "down", "blue", "low"];

// List of angry words
export const angryWords = ["angry", "frustrated", "irritated", "annoyed", "mad", "upset"];

// List of depressed words
export const depressedWords = ["depressed", "despair", "hopeless", "gloomy", "melancholy", "downhearted"];

// List of neutral prompts to guide the conversation
export const neutralPrompts = ["How was your day?", "Tell me about something interesting that happened recently.", "What's on your mind today?"];

// List of responses for different moods
export const happyResponses = ["That's great!", "I'm glad to hear that!", "Sounds like a lot of fun!", "You're on fire!", "Keep the positivity going!"];
export const sadResponses = ["I'm sorry to hear that.", "Cheer up!", "Things will get better.", "I'm here for you.", "Sending virtual hugs your way."];
export const angryResponses = ["Take a deep breath.", "Let's try to find a solution.", "Vent it out, I'm here to listen.", "Things will get better, stay strong."];
export const depressedResponses = ["I'm here for you.", "You're not alone.", "It's okay to feel this way, but remember, things can improve.", "Would you like to talk about what's bothering you?"];

export const systemFunctionResponses = "Chat log cleared successfully!";

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
    return happyResponses[Math.floor(Math.random() * happyResponses.length)];
  } else if (mood === "sad") {
    return sadResponses[Math.floor(Math.random() * sadResponses.length)];
  } else if (mood === "angry") {
    return angryResponses[Math.floor(Math.random() * angryResponses.length)];
  } else if (mood === "depressed") {
    return depressedResponses[Math.floor(Math.random() * depressedResponses.length)];
  } else if (mood === 'systemFunction') {
    return systemFunctionResponses;
  } else if (mood === "neutral"){
    return neutralPrompts[Math.floor(Math.random() * neutralPrompts.length)];
  }
}
