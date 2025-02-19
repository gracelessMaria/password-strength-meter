def username_password_likeness(username, password):
    username_lower = username.lower()                                           #turn password into lower case 
    password_lower = password.lower()
    
                                                                                # Generate all 3-character chunks from the password
    chunks = [password_lower[i:i+4] for i in range(len(password_lower) - 2)]
    
                                                                                # Check if any chunk is present in the username
    for chunk in chunks:                                                        #If any chunk of the password is in the username if YES then return True else return False
        if chunk in username_lower:
            return True
    return False

"""

if username_password_likeness("kafkaesque", "esque"):
    print("yes")
else:
    print("no")


if username_password_likeness("kafkaesque", "kurmd"):
    print("yes")
else:
    print("no")


"""