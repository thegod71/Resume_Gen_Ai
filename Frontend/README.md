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
