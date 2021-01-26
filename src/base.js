import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbATC07N4FLLBmOIQbCksuI1jqZCxJ8TU",
  authDomain: "recette-app-fe16b.firebaseapp.com",
  databaseURL: "https://recette-app-fe16b-default-rtdb.firebaseio.com"
})


var firebaseConfig = {
  apiKey: "AIzaSyBbATC07N4FLLBmOIQbCksuI1jqZCxJ8TU",
  authDomain: "recette-app-fe16b.firebaseapp.com",
  databaseURL: "https://recette-app-fe16b-default-rtdb.firebaseio.com",
  projectId: "recette-app-fe16b",
  storageBucket: "recette-app-fe16b.appspot.com",
  messagingSenderId: "962205627565",
  appId: "1:962205627565:web:6dd6835b5f5d33e8234224"
};



const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base