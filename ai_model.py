import requests
import json

def query_ollama(prompt):
                                                                                    # Set up the API endpoint URL for Ollama
    ollama_url = "http://localhost:11434/api/generate"
    
                                                                                    # Define the headers for the HTTP request
    headers = {
        'Content-Type': 'application/json'
    }
    
                                                                                    # Create the payload with model name, prompt, and options
    data = {
        "model": "deepseek-r1:14b",
        "prompt": "please check how strong this password is : " + prompt ,
        "stream": False,                                                            # To prevent streaming responses
        "options": {
            "temperature": 0.7,                                                     # Randomness
        }
    }
    
    try:
                                                                                    # Send the POST request to Ollama
        response = requests.post(ollama_url, headers=headers, json=data)
        
                                                                                    # Check if the response is successful
        if response.status_code == 200:
            result = response.json()
            return result.get('response', '')
        else:
            return f"Error: {response.status_code} - {response.text}"
    
    except requests.exceptions.RequestException as e:
        return f"Request error: {str(e)}"
    
def split_string(text):
    delimiter = "</think>"
                                                                                    # Split the string at each occurrence of the delimiter
    parts = text.split(delimiter)
    
                                                                                    # Return the list of substrings
    return parts[1]




#!!!!!!! Use this function to call the model 
def call_ai(password):
    answer = split_string(query_ollama(password))
    return answer

#split_string(query_ollama("please check how strong this password is :klysbort" )) This is the call for the function 