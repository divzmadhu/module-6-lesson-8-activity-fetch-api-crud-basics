** Steps Taken to Implement the Program
1. Created a menu-driven program: Used a do...while loop and switch statement to let users select different product operations.
2. Implemented user input: Created a getChoice() function using Promises and process.stdin to receive keyboard input in Node.js.
3. Implemented GET: Used fetch() to retrieve products from the Fake Store API and display them.
4. Implemented POST: Created a product object and used JSON.stringify() to send the product details to the API.
5. Implemented PUT and PATCH: Added a menu that allows users to choose between updating an entire product and updating specific fields.
6. Implemented DELETE: Modified the program to ask the user for a product ID and use it in the DELETE request URL.
7. Tested and debugged the program: Fixed syntax and variable declaration errors and handled the empty response from the DELETE request.


** Major Logical Challenges Faced
1. Managing user input and menu flow: Ensuring the program waits for the user's choice, executes the correct operation, and returns to the menu.
2. Understanding PUT versus PATCH: Determining when to send all product details and when to send only the fields that need updating.
3. Handling dynamic product IDs: Realizing that the program should ask the user which product to update or delete instead of using a hardcoded ID.
4. Handling API responses correctly: Understanding that not every API response contains JSON and that calling response.json() on an empty response can cause an error.
5. Distinguishing successful requests from permanent changes: Learning that Fake Store API simulates write operations, so a successful response does not guarantee that the changes are permanently saved.
6. Identifying and fixing errors: Using error messages to identify problems, such as undeclared variables and unexpected characters, and correcting them.
7. Understanding asynchronous execution: Using await to ensure that API requests and user input are handled in the correct order.

** Next Steps to Improve the Fetch API Program(Work in Progress)

1. Validate user input: Check that the user enters a valid menu option and a positive product ID.
2. Verify the product exists: Before updating or deleting a product, use GET to check whether that product ID exists.
3. Make PATCH interactive: Ask the user which field they want to update, such as the title, price, or category, and accept the new value.
4. Add deletion confirmation: Before sending a DELETE request, display the selected product and ask the user to confirm the deletion.
5. Handle errors using try...catch: Handle network errors and unexpected problems so the program does not crash unnecessarily.
6. Check API responses: Check response.ok after each request and display an appropriate success or failure message.
7. Improve the output: Display product information in a readable format instead of printing the entire product data as a large object.