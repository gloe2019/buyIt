# App Overview

> Note: Due to deployment issues, this repo was split into two further repos to isolate the client and server - [Client Repo](https://github.com/gloe2019/buyItClient) and [Server Repo](https://github.com/gloe2019/buyItServer). 
The frontend was deployed to [Netlify](https://ge-buyit.netlify.app/), while the backend was deployed to [Heroku](https://ge-buyit.herokuapp.com).
You can interact with the app by visiting this live link -> 
**[BuyIt Demo](https://ge-buyit.netlify.app/)**

## App Overview
- BuyIt is a full-stack e-commerce application built with the MERN stack + TypeScript.
- App authentication is handled using JWT, so users can register for and login to the app. User passwords are encrypted with bcrypt
- Users must login in order to view/add items to their cart, as well as to checkout.
- Unauthenticated users can view the list of products on sale, as well as access the `register` or `login` routes.
### Details
- The backend server was built using the MVC (model-view-controller) fromework, with React acting as the view. Models were created using mongoose, then controllers and routes were implemented for the models. 
- The following models and associated controllers were created: `User`, `Product` `ShoppingCart`, `Order`
#### Folder Structure
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
- NavBar
- Checkout

Interfaces: 
users - contains details about the user such as names, email, whether the user is an Admin or not
page - contains name and state values?




## Architectural Requirements
Achitectural design pattern: MVC
Backend: Express, Node & Typeccript
Frontend: Reactjs + TypeScript 

## Views (screenshots)
![Main Page](https://user-images.githubusercontent.com/46451257/144761005-e7c613e4-b4ba-4cb0-a8e1-fe3e0073dbfa.png)
![Registration Form](https://user-images.githubusercontent.com/46451257/144761014-8ffdaa9b-e8aa-4566-a411-b7b1e42a0c24.png)
![Login Form](https://user-images.githubusercontent.com/46451257/144761027-4502ed37-7000-45a0-80eb-46516d35f796.png)







