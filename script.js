// Activity: Fetching and Posting Data with the Fetch API



// Critical Thinking: What challenges might you face when dealing with large amounts of data in responses? How does async error handling improve the user experience in real applications?


function getChoice() {
   return new Promise(function (resolve) {
      process.stdin.once("data", function (data) {
         resolve(Number(data.toString().trim()));
      });
   });
}

function getCh() {
   return new Promise(function (resolve) {
      process.stdin.once("data", function (data) {
         resolve(Number(data.toString().trim()));
      });
   });
}

//    1.  Fetch Data
//         Use a GET request to fetch data from any free API you can find (make sure it includes good documentation!).
//         Display the fetched user data in the console.

//   2.   Change Data
//         If the API you found allows it, make a PUT, PATCH, or DELETE request.
//         If not, continue searching for another option, or ask your colleagues for help.
//         As a fallback option, use the {JSON} Placeholder API.
//         Log the response from the server in the console.


let choice, ch;

do {
   console.log(
      "\n\nProduct Menu\n" +
      "1. View Products (GET) \n" +
      "2. Create a new product (POST) \n" +
      "3. Update a product (PUT / PATCH) \n" +
      "4. Delete a product (DELETE) \n" +
      "5. Exit\n" +
      "Enter your choice: "
   );

   choice = await getChoice();

   console.log("You selected:", choice);
   // process.stdin.pause();

   switch (choice) {
      case 1:
         console.log("\nView Products\n\n");

         const response = await fetch("https://fakestoreapi.com/products");

         const data = await response.json();

         console.log(data);

         break;
      case 2:
         console.log("\nCreate a new Product\n\n");

         const newProduct = {
            title: "My New BackPack",
            price: 25.99,
            description: "ASimple Backpack",
            image: "https://example.com/backpack.jpg",
            category: "bags"
         };

         const postResponse = await fetch("https://fakestoreapi.com/products", {
            method: 'POST',
            body: JSON.stringify(newProduct)
         });

         const postData = await postResponse.json();

         console.log("\nNew product sent:", newProduct);
         console.log("\nServer response:", postData);

         break;

      case 3:
         console.log("\nUpdate a product\n");

         console.log("Choose an update Method: \n\n1.Update Product (PUT)\n2. Update specific fields (PATCH)\nEnter your choice: ")

         ch = await getCh();

         if (ch === 1) {
            const updateProduct = {
               title: "Updated Backpack", price: 40,
               description: "A backpack for travelling",
               image: "https://example.com/backpack.jpg",
               category: "bags"
            };

            const putResponse = await fetch("https://fakestoreapi.com/products/1", {
               method: "PUT",
               body: JSON.stringify(updateProduct)

            });
            const putData = await putResponse.json();

            console.log("Updated data", updateProduct);
            console.log("PUT server response:", putData);


         }
         else if (ch === 2) {

            const patchProduct = {
               price: 30
            };
            const patchResponse = await fetch("https://fakestoreapi.com/products/1", {
               method: "PATCH",
               body: JSON.stringify(patchProduct)
            });
            const patchData = await patchResponse.json();
            console.log("Updated data", patchProduct);
            console.log("PATCH server response:", patchData);
         }
         else {
            console.log("Invalid update choice");
         }
         break;


      case 4:
         console.log("\nDelete a product\n\n");

         console.log("Enter the product ID you want to delete:");

         let productId = await getChoice();

         console.log("You selected product ID:", productId);

         const deleteResponse = await fetch(
            `https://fakestoreapi.com/products/${productId}`,
            {
               method: "DELETE"
            }
         );
         if (deleteResponse.ok) {
            console.log("DELETE request completed successfully.");
            console.log("HTTP Status:", deleteResponse.status);
         }
         else {
            console.log("DELETE request failed.");
            console.log("HTTP Status:", deleteResponse.status);
         }

        
         break;

      case 5:
         console.log("Exit");
         process.stdin.pause();
         break;

      default:
         console.log("Invalid Choice");
         break;


   }

} while (choice != 5);
