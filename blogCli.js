// For making prompts interactive
const prompt = require("prompt-sync")({ sigint: true });

// Blog posts will be stored here => blogs
// The blogs input is not persistent 
// Once the While loop is closed all data in the blogs array will be lost.
const blogs = [
    {
        id: 1,
        title: 'Checkout my linkedIn',
        content: 'Hello Mentor / Facilitator, In the course of your stay here, I would appreciate you checking out my linkedIn, I bet you will find my content interesting - https://www.linkedin.com/in/ifeanyi-okafor-bio - Gracias',
        author: 'Okafor Ifeanyi',
        date: '1/11/2025, 1:15:46 PM'
    }
];

// Menu to state all my active functions
const displayMenu = () => {
    return `
    **********-*Learnable*-**********
    Welcome to my Blog!
    *********************************
    Please select an option:
    1. Create a new blog post
    2. View all blog posts
    3. Edit a blog post
    4. Delete a blog post
    5. Search blog posts
    6. Exit
    *********************************`;
};

// Create a post, then append to Blog array
const createPost = () => {
    console.log("\n--- Create a New Blog Post ---");
    const title = prompt("Enter the blog title: ");
    const content = prompt("Enter the blog content: ");
    const author = prompt("Enter the author's name: ");
    const date = new Date().toLocaleString();
    const id = blogs.length + 1;

    blogs.push({ id, title, content, author, date });
    console.log(`\nBlog post '${title}' created successfully!\n`);
};

// Display all the blog post using the format described
const viewPosts = () => {
    console.log("\n--- All Blog Posts ---");
    if (blogs.length === 0) {
        console.log("No blog posts found.\n");
    } else {
        blogs.forEach((blog) => {
            console.log(`
            ID: ${blog.id}
            Title: ${blog.title}
            Author: ${blog.author}
            Date: ${blog.date}
            Content: ${blog.content}
            ---------------------------------
            `);
        });
    }
};

// Update an existing post
const editPost = () => {
    console.log("\n--- Edit a Blog Post ---");
    const postId = parseInt(prompt("Enter the ID of the blog post to edit: "), 10);
    const post = blogs.find((blog) => blog.id === postId);

    // Edit the post if e de
    if (post) {
        console.log(`Editing blog post: ${post.title}`);
        const newTitle = prompt(`New Title (leave blank to keep '${post.title}'): `) || post.title;
        const newContent = prompt(`New Content (leave blank to keep the existing content): `) || post.content;
        const newAuthor = prompt(`New Author (leave blank to keep '${post.author}'): `) || post.author;

        post.title = newTitle;
        post.content = newContent;
        post.author = newAuthor;
        post.date = new Date().toLocaleString();

        console.log(`\nBlog post ID ${postId} updated successfully!\n`);

    } else { // Error Handler if post doesn't exist
        console.log("Blog post not found.\n");
    }
};

// Delete a post from Blog array
const deletePost = () => {
    console.log("\n--- Delete a Blog Post ---");
    const postId = parseInt(prompt("Enter the ID of the blog post to delete: "), 10);
    
    // findIndex is udex to find the first id that matches. PS: IDs are unique
    const postIndex = blogs.findIndex((blog) => blog.id === postId);

    if (postIndex !== -1) { //
        blogs.splice(postIndex, 1);
        console.log(`\nBlog post ID ${postId} deleted successfully!\n`);
    } else { // Error Handler if post doesn't exist
        console.log("Blog post not found.\n");
    }
};

// Filter posts based on a keyword search across title, content, or author.
const searchPosts = () => {
    console.log("\n--- Search Blog Posts ---");
    const keyword = prompt("Enter a keyword to search for: ").toLowerCase();

    // loop through the available post and select the post that contains the keyword
    const filteredPosts = blogs.filter(
        blog =>
            blog.title.toLowerCase().includes(keyword) ||
            blog.content.toLowerCase().includes(keyword) ||
            blog.author.toLowerCase().includes(keyword)
    );

    // If any post matched the search, console log it
    if (filteredPosts.length > 0) {
        console.log("\nSearch Results:");
        filteredPosts.forEach((blog) => {
            console.log(`
            ID: ${blog.id}
            Title: ${blog.title}
            Author: ${blog.author}
            Date: ${blog.date}
            Content: ${blog.content}
            ---------------------------------
            `);
        });
    } else {
        // If no post matches the search
        console.log("No blog posts matched your search.\n");
    }
};

// Delay function for context
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// My Code Starts here
const blogCLI = async () => {
    // This block will keep reoccuring till you pick 6 or CTRL C..... Take note
    while (true) {
        await delay(1000) // slows down reply so you can see the response before the display comes up again
        console.log(displayMenu());
        const choice = parseInt(prompt("Enter your choice: "), 10);

        // Flow control to select through the functions displayed.
        switch (choice) {
            case 1:
                createPost();
                console.log(blogs)
                break;
            case 2:
                viewPosts();
                break;
            case 3:
                editPost();
                break;
            case 4:
                deletePost();
                break;
            case 5:
                searchPosts();
                break;
            case 6:
                console.log("Thank you for using Blog CLI. Goodbye!");
                return;
            default:
                console.log("Invalid choice. Please select a valid option.\n");
        }
    }
};

// Script starts here
blogCLI();