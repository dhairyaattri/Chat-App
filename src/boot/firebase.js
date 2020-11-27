import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'

var firebaseConfig = {
  apiKey: 'AIzaSyB4zkxXy-pv7HXyd6zZK5o8pRPo-L5JIfI',
  authDomain: 'chat-app-4bcc1.firebaseapp.com',
  databaseURL: 'https://chat-app-4bcc1.firebaseio.com',
  projectId: 'chat-app-4bcc1',
  storageBucket: 'chat-app-4bcc1.appspot.com',
  messagingSenderId: '208851219894',
  appId: '1:208851219894:web:3302e024d587b3dea83d17'
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
