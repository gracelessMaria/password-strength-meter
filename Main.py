import eel
from password_test import calculate_password_score
from file_checker import check_word_in_file
file_name = "alot.txt"

# Set web files folder
eel.init('web')

# Expose this function to Javascript
@eel.expose                         
def check_password(password):
    # create variable that is an array of length 2
    # index 0 is password score
    result = []
    result.append(calculate_password_score(password))
    # index 1 is true/false from file checker
    result.append(check_word_in_file(file_name, password))
    return result

eel.start('index.html')  # Start