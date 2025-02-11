import eel
from password_check import password_tests_check
from file_checker import check_word_in_file
#from ai_model import call_ai
file_name = "alot.txt"

# Set web files folder
eel.init('web')

# Expose this function to Javascript
@eel.expose                         
def check_password(password):
    # create variable that is an array of length 2
    # index 0 is password score
    result = []
    result.append(password_tests_check(password))
    # index 1 is true/false from file checker
    result.append(check_word_in_file(file_name, password))
    #call ai
    #result.append(call_ai(password))
    return result

eel.start('index.html', mode='default')  # Start