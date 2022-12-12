import { firebaseConfig } from './firebase.mjs'
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
//console.log(db)


let colecao = 'home'
let documento = ''

//const descricao = document.getElementById('story')
const buscBtn = document.querySelectorAll('.main-btn')
console.log(buscBtn)
//console.log(descricao)
//console.log(buscBtn[0].id)
//console.log(buscBtn[1].id)

for(let i = 0; i < buscBtn.length; i++){
    buscBtn[i].addEventListener('click', function(){
        console.log(buscBtn[i].id)
        documento = buscBtn[i].id.toString()
        console.log(documento)
        
        if(documento == 'getDesc'){
            documento = 'home'
            getData(colecao, documento, ['descricao'])
        }
        if(documento == 'postDesc'){
            documento = 'home'
            let setDescricao = document.getElementById('descricao')
            let objId = setDescricao.id
            console.log(setDescricao.value)
            console.log(setDescricao.id)
            let obj = {
                [objId]: setDescricao.value,
            }
            console.log('obj:',obj)
            setData(colecao, documento, obj)
        }

        if(documento == 'getAboutInfo'){
            documento = 'about'
            let array = ['info']
            getData(colecao, documento, array)
        }
        if(documento == 'postAboutInfo'){
            documento = 'about'
            let abInfo = document.getElementById('aboutInfo')
            let objId = abInfo.id
            console.log(abInfo.value)
            console.log(abInfo.id)
            let obj = {
                [objId]: abInfo.value,
            }
            console.log('obj:',obj)
            setData(colecao, documento, obj)
        }
        if(documento == 'getAboutTimeLine'){
            documento = 'about'
            let timeline = ['cargo', 'desc', 'local']
            let array = timeline
            getData(colecao, documento, array)
        }
        if(documento == 'postAboutTimeLine'){
            documento = 'timeLine'
            let firstTimeLineCargo = document.getElementById('aboutTimeLineFirstCargo')
            let firstTimeLineLocal = document.getElementById('aboutTimeLineFirstLocal')
            let firstTimeLinedec = document.getElementById('aboutTimeLineFirstDec')
            let secondTimeLineCargo = document.getElementById('aboutTimeLineSecondCargo')
            let secondimeLineLocal = document.getElementById('aboutTimeLineSecondLocal')
            let secondimeLinedec = document.getElementById('aboutTimeLineSecondDec')

            let firstTimeLineCargoId = firstTimeLineCargo.id
            let firstTimeLineLocalId = firstTimeLineLocal.id
            let firstTimeLinedecId = firstTimeLinedec.id
            let secondTimeLineCargoId = secondTimeLineCargo.id
            let secondimeLineLocalId = secondimeLineLocal.id
            let secondimeLinedecId = secondimeLinedec.id
            
            console.log(firstTimeLineCargo.value)
            console.log(firstTimeLineCargo.id)
            let obj = {
                [firstTimeLineCargoId]: firstTimeLineCargo.value,
                [firstTimeLineLocalId]: firstTimeLineLocal.value,
                [firstTimeLinedecId]: firstTimeLinedec.value,
                [secondTimeLineCargoId]: secondTimeLineCargo.value,
                [secondimeLineLocalId]: secondimeLineLocal.value,
                [secondimeLinedecId]: secondimeLinedec.value
            }
            console.log('obj:',obj)
            //setData(colecao, documento, obj)
        }
    })
}

function getData(collectionName, documentName, dataName){
    console.log('dataName',dataName)
    var homeCollection = db.collection(collectionName).doc(documentName)
    let descricao = document.getElementById('descricao')
    let abInfo = document.getElementById('aboutInfo')
    let timeLineFirstDec = document.getElementById('aboutTimeLineFirstDec')
    let elemento = document.querySelectorAll('textarea')
    console.log('elemento:',elemento)
    homeCollection.get().then((doc)=>{
        if(doc.exists){
            console.log('Document Data: ', doc.data())
            dataName.forEach((dataName)=>{
                console.log('dataName:',dataName)
                if (dataName == "descricao"){
                    descricao.innerText = doc.data().dataName.descricao
                }
                if (dataName == 'info'){
                    abInfo.innerText = doc.data().dataName.aboutInfo
                }
                if (dataName == 'cargo'){
                    timeLineFirstDec.innerText = doc.data().timeLine.second.dec
                }
                if (dataName == 'local'){
                    timeLineFirstDec.innerText = doc.data().timeLine.second.dec
                }
                if (dataName == 'desc'){
                    timeLineFirstDec.innerText = doc.data().timeLine.second.dec
                }
            })
        }
        else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document: ", error);
    });
}



function setData(collectionName, documentName, dataName){
    console.log('set dataName',dataName)
    db.collection(collectionName).doc(documentName).set({
        dataName
    }, { merge: true })
    .then(() => {
        console.log("Document successfully written!");
        alert("Document successfully written!")
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}












/* function getData(collectionName, documentName){
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
} */





/* db.collection("home").get()
.then((snapshot) => {
    
    
    snapshot.forEach((doc) => {
        console.log(doc.data());
        
    })
}).catch(e =>{
    console.log(e)
}) */
