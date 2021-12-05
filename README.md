# App Overview

> Note: Due to deployment issues, this repo was split into two further repos to isolate the client and server - [Client Repo](https://github.com/gloe2019/buyItClient) and [Server Repo](https://github.com/gloe2019/buyItServer). 
The frontend was deployed to [Netlify](https://ge-buyit.netlify.app/), while the backend was deployed to [Heroku](https://ge-buyit.herokuapp.com).
You can interact with the app by visiting this live link -> 
**[BuyIt Demo](https://ge-buyit.netlify.app/)**

## App Overview
- BuyIt is a full-stack e-commerce application built with the MERN stack + TypeScript.
- App authentication is handled using JWT, so users can register for and login to the app. User passwords are encrypted with bcrypt
- Unauthenticated users can view the list of products on sale, as well as access the `register` or `login` routes.

### App Flow
- User reaches the main page and can browse products. To purchase the user needs to either register or log in, then they are able to add items to their cart.
- Once satisfied, the user clicks cart to view the items listed and clicks the checkout button to proceed with their order.
- At the payment detail page, the user must enter a valid card, otherwise they will be unable to proceed. 
```
Example of a valid card:
Card Number: 4242 4242 4242 4242
MM/YY: any numeric values  greater than present date. Try 11/22
CVC: any numeric values
ZIP: any numeric values (edited) 
```
- After entering valid card details, the user clicks the confirm order, their order is completed and they are returned to the main page. Their cart is also emptied out.


### Details
- The backend server was built using the **MVC (model-view-controller) fromework**, with React acting as the view. Models were created using mongoose, then controllers and routes were implemented for the models. 
- The following models and associated controllers were created: `User`, `Product` `ShoppingCart`, `Order`
#### Folder Structure
- App logic was isolated in distinct folders show below. This was done intentionally to as it made development modular. I was ableo to work through from model->controller->view for each distinct model and add new files as necessary without affecting the rest of the application.
```
BuyItServer
│   tsconfig.json
│   package.json
│   ...
│───config
│───controllers
│───helpers
│───interfaces
│───middleware
│───models
└───routes

```

#### Dependencies
**Backend**
- Node
- Express
- TypeScript
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)

**Frontend**
- React
- TypeScript
- Stripe API
- Material UI (MUI) 
- Axios



#### Relevant React UI Components: 
- Register
- Login
- Products
- NavBar (Reused throughout application for consistency)
- Cart
- Checkout


## Views (screenshots)
### Main Page
![Main Page](https://user-images.githubusercontent.com/46451257/144761005-e7c613e4-b4ba-4cb0-a8e1-fe3e0073dbfa.png)
### Login Page
![login_page](https://user-images.githubusercontent.com/46451257/144761508-0f5b778a-86b3-4677-b0a0-70f5dea960bd.png)
### Shopping Cart
![cart_with_items](https://user-images.githubusercontent.com/46451257/144761529-2b3973c4-a043-4a84-967b-8d07063cf81d.png)
### Registration Form
![Registration Form](https://user-images.githubusercontent.com/46451257/144761014-8ffdaa9b-e8aa-4566-a411-b7b1e42a0c24.png)






