Frontend API README:-
This README provides an overview of the Frontend application for the "snSilos" application, including instructions on how to set it up and run on the local machine.

Description
The frontend application is built using React, TailwindCss and uses various libraries and components to create a user interface for interacting with a product catalog. It includes features such as browsing products, adding them to the cart, viewing the cart, and checking out.

The main components of the application include:

1.App:
Description: The root component defining the application's routes using React Router. It encompasses main pages and components with a suspense wrapper for lazy loading.
2.Header:
Description: Renders the header/navigation section of the application, providing users with navigation options and access to their profile and cart.
3.MainContainer:
Description: Displays the homepage (Home) and filtered products. It includes the CartPage component when the cart is visible, ensuring smooth navigation and shopping experience.
4.ProductPage:
Description: Displays detailed information about a specific product, enabling users to add the product to their cart or make a purchase.
5.FilterProducts:
Description: Lists products based on selected categories and offers users the ability to filter the displayed products for easier product exploration.
6.CartPage:
Description: Shows the items present in the cart, along with their quantities and total price. Users can clear the cart or proceed to checkout for a convenient shopping process.
7.Admin:
Description: An admin panel dedicated to adding new products to the catalog. The component includes a form for entering product details, enhancing the catalog management process.
8.Home:
Description: Renders the homepage of the application, highlighting fresh and organic produce. It includes a call-to-action button for users to make a purchase.
9.ProfilePage:
Description: Displays the user's profile information, allowing them to navigate between different sections such as Home, Analytics, Reports, and Settings. Users can also log out from this page.
10.Products:
Description: Represents a single product item with its image, price, rating, and title. Users can add the product to their cart using the provided button.
11.Header:
Description: Renders the navigation header of the application. It includes a search bar, shopping cart icon, and user profile icon that provides access to profile-related options.
12.CartItem:
Description: Displays a single item in the shopping cart, showing the product image, title, price, and quantity. Users can increase or decrease the quantity of the item in the cart.

Installation:
1. Clone the repository to your local machine: git clone <repository-url>
2.Install the required dependencies: npm install

Usage
To start the development server and view the application, follow these steps:
1. In the project directory, run: npm start
2.Open your web browser and go to http://localhost:3000 to access the application.