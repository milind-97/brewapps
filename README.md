# infeedo_task

before runnnig the code please install nodejs npm and mongooose on your machine.
steps to run the code

1. open the root directory where package.json file present 
2. run the command npm install
3. to run the test cases run npm test
4. to run nodejs application run npm start command

apis list:

1. api to add book
api url: localhost:4000/api/books
Method: post
body: {
   "author":"i am",
   "title":"DOde",
   "summary":"TEST"
}

2. api to get books list
api url: localhost:4000/api/books
Method: GET

3. api to get single book details
api url: localhost:4000/api/books?book_id=pass_dynamic id here
Method: GET

4. api to get edit book details
api url: localhost:4000/api/books/:book_id
Method: PATCH
body: {
   "author":"i am",
   "title":"DOde",
   "summary":"TEST"
}

5. api to get delete book details
api url: localhost:4000/api/books/:book_id
Method: DELETE

