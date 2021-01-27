import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbATC07N4FLLBmOIQbCksuI1jqZCxJ8TU",
  authDomain: "recette-app-fe16b.firebaseapp.com",
  databaseURL: "https://recette-app-fe16b-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base