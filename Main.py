import tkinter as tk
from password_test import calculate_password_score
from file_checker import check_word_in_file
file_name = "alot.txt"
class StringInputApp:
    def __init__(self, root):
        self.root = root
        self.root.title("String Input")
        self.root.configure(bg="grey")                                                                                  # Set the background color of the main window to grey

                                                                                                                        # Create a frame to hold the widgets
        self.frame = tk.Frame(self.root, bg="grey")                                                                     # Set the background color of the frame to grey
        self.frame.pack(expand=True)                                                                                    # This makes the frame expand to fill the window

                                                                                                                        # Create and place the first input field
        self.label1 = tk.Label(self.frame, text="Enter String 1:", bg="grey", fg="black")                               # Set background and text color
        self.label1.grid(row=0, column=0, pady=5, sticky="e")

        self.entry1 = tk.Entry(self.frame, width=40, bg="lightgrey", fg="black")                                        # Set background and text color
        self.entry1.grid(row=0, column=1, pady=5)

                                                                                                                        # Create and place the second input field
        self.label2 = tk.Label(self.frame, text="Enter String 2:", bg="grey", fg="black")                               # Set background and text color
        self.label2.grid(row=1, column=0, pady=5, sticky="e")

        self.entry2 = tk.Entry(self.frame, width=40, bg="lightgrey", fg="black")                                        # Set background and text color
        self.entry2.grid(row=1, column=1, pady=5)

                                                                                                                       # Create and place the submit button
        self.submit_button = tk.Button(self.frame, text="Submit", command=self.on_submit, bg="lightgrey", fg="black")  # Set background and text color
        self.submit_button.grid(row=2, column=0, columnspan=2, pady=20)

    def on_submit(self):
                                                                                                                       # Retrieve the input strings from the entry Fields
        string1 = self.entry1.get()
        string2 = self.entry2.get()
        
                                                                                                                       # Prints username and password into the terminal
        print(f"String 1: {string1}")
        print(f"String 2: {string2}")
        
        print("password strenght", calculate_password_score(string2))                                                  #print the score of the password
        if check_word_in_file(file_name, string2):                                                                     #check if password is in a leaked database
            print("password is compromised")
        


if __name__ == "__main__":
    root = tk.Tk()
    app = StringInputApp(root)
    root.mainloop()