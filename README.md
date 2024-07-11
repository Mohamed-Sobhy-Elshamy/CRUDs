# CRUD Product Management System

This project is a simple CRUD (Create, Read, Update, Delete) application for managing products. It is built with HTML, CSS, and JavaScript, and uses local storage to persist data.

## Features

- **Create**: Add new products with details such as title, price, taxes, ads cost, discount, and category.
- **Read**: Display the list of all products.
- **Update**: Modify existing product details.
- **Delete**: Remove a single product or delete all products.
- **Search**: Search products by title or category.
- **Total Calculation**: Automatically calculate the total cost of a product including price, taxes, and ads, minus the discount.

## Project Structure

- `index.html`: The main HTML file containing the structure of the application.
- `style.css`: The CSS file for styling the application.
- `main.js`: The JavaScript file containing the logic for the CRUD operations.

## How to Use

1. **Create a Product**:
    - Fill in the product details in the input fields.
    - Click the "Create" button to add the product to the list.
    - If you enter a count greater than 1, the product will be added multiple times.

2. **Read Products**:
    - The list of products is displayed in a table below the input fields.
    - Each product shows its details including the total cost.

3. **Update a Product**:
    - Click the "Update" button next to the product you want to edit.
    - The product details will be loaded into the input fields.
    - Edit the details and click the "Update" button to save the changes.

4. **Delete a Product**:
    - Click the "Delete" button next to the product you want to remove.
    - To delete all products, click the "Delete All" button.

5. **Search Products**:
    - Use the search input to filter products by title or category.
    - Toggle between searching by title and category using the buttons below the search input.

## Local Storage

- The application uses local storage to save the products, so the data persists even after refreshing the page.
- The data is stored as a JSON string in the local storage with the key `product`.

## Functions

### getTotal()
Calculates the total cost of a product based on price, taxes, ads, and discount.

### clearData()
Clears the input fields after a product is created or updated.

### showData()
Displays the list of products in the table.

### deleteData(i)
Deletes a product at the specified index.

### deleteAll()
Deletes all products from the local storage and updates the display.

### updateData(i)
Loads the product details into the input fields for updating.

### getsearchMood(id)
Sets the search mode to either title or category based on the button clicked.

### searchData(value)
Filters the products based on the search input value.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

- **Mohamed Elshamy**
