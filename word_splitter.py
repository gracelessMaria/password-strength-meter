def split_string(text):
    delimiter = "</think>"
    # Split the string at each occurrence of the delimiter
    parts = text.split(delimiter)
    
    # Return the second part of the list of substrings
    return parts[1]


