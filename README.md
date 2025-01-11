# Blog CLI Documentation

## Introduction

This is a Blog Command Line Interface (CLI) application designed for managing blog posts. The script provides functionality to create, view, edit, delete, and search blog posts via a user-friendly, interactive terminal interface. It uses in-memory storage, meaning all data is lost when the application exits.

## Features
1.	Create a Blog Post
Allows the user to create a new blog post by providing the title, content, author, and automatically sets the creation date.
2.	View All Blog Posts
Displays all blog posts stored in memory, showing their ID, title, author, date, and content.
3.	Edit a Blog Post
Lets the user edit an existing blog post by specifying its ID. The user can update the title, content, and author.
4.	Delete a Blog Post
Deletes a blog post by its ID, removing it permanently from the in-memory storage.
5.	Search Blog Posts
Searches blog posts for a given keyword, matching it against the title, content, and author fields.
6.	Exit
Ends the application gracefully.

## Prerequisites
1. IDE - Vscode, Scrimba, Pycharm...
2. Node installed
3. Common Sense 🙂

## How to Use
1.	Install Dependencies:
This script uses the prompt-sync library for user input. Install it with:

*cmd* => `npm install prompt-sync`


2.	Run the Script:
Execute the script in your terminal:

*cmd* => `node blogCli.js`


3.	Interactive Menu:
You will be presented with a menu of options:

![Display Dashboard](https://github.com/user-attachments/assets/80bc9640-170e-4b7e-acf8-8054f9c46322)


4.	Choose an Option:
Enter the number corresponding to the desired action.


## Functions

1. createPost()
	•	Prompts the user to input the blog’s title, content, and author.
	•	Automatically assigns a unique ID and sets the creation date.
	•	Adds the new blog post to the blogs array.

2. viewPosts()
	•	Displays all blog posts in the following format:


```yaml
ID: 1
Title: Checkout my linkedIn
Author: Okafor Ifeanyi
Date: 1/11/2025, 1:15:46 PM
Content: Hello Mentor / Facilitator, In the course...
---------------------------------
```


3. editPost()
	•	Prompts the user to enter the ID of the blog post they wish to edit.
	•	Allows the user to update the title, content, or author. Leaving an input blank retains the original value.
	•	Updates the blog post’s date to reflect the edit.

4. deletePost()
	•	Prompts the user to enter the ID of the blog post they wish to delete.
	•	Removes the corresponding blog post from the blogs array.

5. searchPosts()
	•	Prompts the user to enter a keyword.
	•	Searches the title, content, and author fields of all blog posts.
	•	Displays matching posts or a message if no matches are found.

6. displayMenu()
	•	Returns the main menu text.

7. delay(ms)
	•	Introduces a delay before each menu display to improve user experience.

8. blogCLI()
	•	The main function that runs the CLI.
	•	Contains the main loop where the user can select options until they exit the application.


## Exiting the Application
1.	Select Option 6.
2.	Output:


## Limitations
1.	Non-Persistent Storage:
	•	All blog posts are stored in memory and will be lost once the program exits.
	•	To make the data persistent, you could use a database or write to a file.
2.	Basic Input Validation:
	•	Assumes valid input for options and prompts.
	•	Additional validation may be needed for production use.

>> Thank you for using My Blog CLI. Goodbye!
>> _Author: *Okafor Ifeanyi*_ <br>
>> Check Out My [LinkedIn](www.linkedin.com/in/ifeanyi-okafor-bio)