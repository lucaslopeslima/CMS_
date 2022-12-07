import { firebaseConfig } from './firebase.mjs'
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
console.log(db)

/* db.collection("home").get()
.then((snapshot) => {
    
    
    snapshot.forEach((doc) => {
        console.log(doc.data());
        
    })
}).catch(e =>{
    console.log(e)
}) */
let colecao = ''
let documento = ''
const descricao = document.getElementById('story')



var homeCollection = db.collection('home').doc('home')

homeCollection.get().then((doc)=>{
    if(doc.exists){
        console.log('Document Data: ', doc.data())
        descricao.innerText = doc.data().descricao
    } 
    else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

