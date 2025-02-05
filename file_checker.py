def check_word_in_file(file_path, word, case_sensitive=True, encoding='utf-8'):
    file_name = str(file_path)
    search_word = str(word)
    try:
        with open(file_path, 'r', encoding=encoding) as file:                                       #Specify encoding here to avoid errors when it comes to non unicode standard symbols
            for line in file:                                                                       #Go through every line in .txt document, because every leaked password is on a new line 
                current_line = line.strip()                                                         
                
                if not current_line:
                    continue                                                                        #In case there is an empty line in the .txt document skip it
                
                if case_sensitive:                                                                  #Check to see if it is case sensitive, because we have a requirement for different case`s we leave this as True always
                    if word == current_line:
                        return True
                else:
                    if word.lower() == current_line.lower():                                        #if its not case sensitive transform the password into Lower case and transform the leaked password into lower 
                        return True
            
                                                                                                    # If the loop completes without finding the word return false indicating that it did not find the word in the database 
        return False
        
    except FileNotFoundError:                                                                       #exceptions for debugging honestly not important but good for making sure that it works while testing and future debugging
        print(f"The file '{file_path}' was not found.")
        return False
    except UnicodeDecodeError as e:                                                                 #In case the symbols are not in the unicode standard "utf-8"
        print(f"Encoding error while reading the file: {e}")
        print("Try using a different encoding (e.g., 'cp1252' or 'latin-1').")
        return False
    except IOError:                                                                                 #simple error for the file reading 
        print(f"An error occurred while reading the file '{file_path}'.")
        return False
