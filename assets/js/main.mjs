import { firebaseConfig } from './firebase.mjs'
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
//console.log(db)


let colecao = 'home'
let documento = 'home'

const descricao = document.getElementById('story')
const buscBtn = document.querySelectorAll('.getBtn')
//console.log(descricao)
//console.log(buscBtn[0].id)
//console.log(buscBtn[1].id)

for(let i = 0; i < buscBtn.length; i++){
    buscBtn[i].addEventListener('click', function(){
        console.log(buscBtn[i].id)
        getData(colecao, documento)
    })
}

/* buscarBtn.addEventListener('click', (e) =>{
    console.log('clicou em ' + e.id)
    const id = e.target.dataset.id
    console.log(id)
    getData(colecao, documento)
    if (id){
        
    }
}) */



function getData(collectionName, documentName){
    var homeCollection = db.collection(collectionName).doc(documentName)

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
}





/* db.collection("home").get()
.then((snapshot) => {
    
    
    snapshot.forEach((doc) => {
        console.log(doc.data());
        
    })
}).catch(e =>{
    console.log(e)
}) */
