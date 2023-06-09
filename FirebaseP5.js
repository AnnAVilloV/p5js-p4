import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-functions.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBjUEw_DQNMQsZJWfTtLL0PQJoH-xF0kk",
    authDomain: "sta-cs5041.firebaseapp.com",
    databaseURL: "https://sta-cs5041-p4.firebaseio.com",
    projectId: "sta-cs5041",
    storageBucket: "sta-cs5041.appspot.com",
    messagingSenderId: "639987847762",
    appId: "1:639987847762:web:c5a35616a1aa1cf243458b"
    };
 


export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseToken = "d61778a3-7318-44f2-a128-2e56552ef8d6";
export const auth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);
export const functions = getFunctions(firebaseApp);