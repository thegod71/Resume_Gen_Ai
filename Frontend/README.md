==> Step 1=>
a> Setup react app and remove all css file
b> here we use scss in place of css because it gives more feature as compare to Css but all the code is like css to use Scss (npm i sass)
==> Step 2=>
a> for navigation we use react router dom (npm i react-router)

There is Four layer architecture OF frontend
Layer 1=>UI => In this layer what user see on the website and also how user navigate
a>component
b>pages

Layer 2=>Hook -> for managing state and api layer  
a>Hooks

Layer 3=>State-->it works is to manage the state of data . In simple words to store the data
a>auth.context.jsx
b>ai.context.jsx

Layer 4=> Api -> How your frontend communicate with backend
=>servies -> auth.api.js

==> To communicate frontend with backend we use axios package

Layer 3-->{

//The Context API in React is a way to share data between components without passing props manually through every level of the component tree.

//It helps solve the problem of prop drilling, where data has to be passed through many intermediate components that don't actually use it.}

// we have to create a protected component because there are some pages in the website which are not access directly without login and logout so for that we have to created protected component to ya kyse se pata hoga ki user login hai to usska liya auth.context may age user (may kch value) present hain to wo login hai and if not user==NULL then no user is present

------------------AI-----------------Start--------------
1> Now user Give 3 things a=>Self Description
b=>Resume(Pdf)
c=>Job Description
with the help of Document parser parse the pdf and then take out text form the resume and sent all 3 things to server with the help of Api

On server side -> Report Generated in proper output formate that is json
a>technical Question
b>behavioral Question
c>skillGaps
d>preparation Plan
e>latext code (not present but in future)
