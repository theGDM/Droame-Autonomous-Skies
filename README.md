## **Problem Statements :**

- Droame has deployed its autonomous aerial videography services at several tourist
    Destinations. Assume that you are a product engineer at Drome, and are in charge of
    Planning & developing a portal to manage customer bookings.
- You are required to create a web application that allows the operator to manage
    customers and their bookings of drone shots.
- You also have to store this data in the backend tables.

## **Solution :**

To solve this problem, I have divided it into three portions. Operator, Customer and
Bookings. Operator is the person, who is having the drones available with him, which he
allocating them to the different customers for some period of time. Operator is responsible
for creating the customer, updating there details, deleting the customers and also booking
the drones for a specific customer. He can also update, delete the bookings of the various
customers.

In our case, only Operator have the right to do anything with customers data and booking
data. The whole emphasis lie on how we make the flow of the data. So for that reasons I
have created three schema for operators, customers, and bookings. Operator will have the
details like, username, password, email, No of drones, and the tourist place at which he
lending the drones. Customer will have the operator Id in its schema, and other details like
name, email, phone number, and array of object which will keep the booking id in it.
Booking schema have fields like drone number, i.e. which drone picked by the customer,
and for the duration of use.

![Screenshot 2023-04-01 232700](https://user-images.githubusercontent.com/89511377/229307120-bc11440a-0917-47cc-bba4-dd4af4dd6704.jpg)

## **Tools Used :**
**`FrontEnd :`** To make the UI of the web application, I have used the **React.js** library, **HTML** ,
and for making the UI more enhancing I have used the **Vanila CSS**.

**`BackEnd :`** Backend is made using the **Node.js** , **Express.js**

**`Database :`** For storing the Operators data, customers data, and booking information I have
used the **MongoDB** database.


**`Deployment :`** Currently the web application is only pushed to the **Github**.

## **Steps to Run the Application:**

1. Firstly fork the given repo.
2. Create a folder named ‘Droame’ in Visual Studio.
3. Clone the github repo to the respective ‘Drome’ folder, using the command,
    `$git clone https://github.com/YOUR-USERNAME/REPO-NAME`
4. Now go to the ‘api’ directory
5. Now open the terminal and run the command `npm install` in the same directory, so
    It will install all the libraries and the modules.
6. Now start the express server using the command `nodemon index.js`.
7. Now go the ‘client’ directory and then into the ‘drome’ directory.
8. Again open the terminal and run the command `npm install` in the same directory, so
    It will install all the libraries and the modules.
9. Now run the react app using the command `npm start`

**`Github Link :`** https://github.com/theGDM/Droame-Autonomous-Skies

**`Video Description Link :`**
https://drive.google.com/drive/folders/1ZvhdHpC7PCb9lMncWpZ9eoSfgN0TMPki?usp=share_link


