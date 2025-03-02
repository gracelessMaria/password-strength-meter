import eel
from file_checker import check_word_in_file
from username_password import username_password_likeness
from ai_model import call_ai
file_name = "compromised_passwords.txt"

# Set web files folder
eel.init('web')

# Expose this function to Javascript
@eel.expose                         
def check_password(password, username, show_ai):
    result = []
    result.append(check_word_in_file(file_name, password))
    result.append(username_password_likeness(username, password))
    if show_ai == "on":
        result.append(call_ai(password))
    return result

eel.start('index.html', mode='default')  # Start