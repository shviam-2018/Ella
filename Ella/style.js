import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 27,
    justifyContent: 'flex-end',
    padding: 20,
  },
  dp: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#4B0082',
  },
  header: {
    height: 70,
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
