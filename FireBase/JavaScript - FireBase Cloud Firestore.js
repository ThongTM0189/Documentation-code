// import the library of firebase, can import in local or AIP specific
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField  } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
const firebaseConfig = {
  //API key of the Firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//add new documents with auto Id generation
async function AddDocument_AutoID(){
    const db = getDatabase();
    var ref = collection(db,"(name of colection)");
    const docRef = await addDoc(ref, {
        //object ot add in document
    }).then(function(){
        // if the document added successful
    }).catch(function(err){
        //if has an error
    })
}

//add new documents with set Id
async function AddDocument_CustomID(){
    const db = getDatabase();
    var ref = doc(db,"(name of colection)","id of document");

    const docRef = await setDoc(ref, {
        //object ot add in document
    }
    ).then(function(){
        // if the document added successful
    }).catch(function(err){
        //if has an error
    })
}

//get document
async function getDocument(){
    const db = getDatabase();
    var ref = doc(db,"(name of colection)","id of document");
    const docSnap = await getDoc(ref);

    if(docSnap.exists()){
        //if the document can be found docSnap.data().{nameKey}
    }else{
        //do something
    }
}

//update document
async function updateFeildDocument(){
    const db = getDatabase();
    var ref = doc(db,"(name of colection)","id of document");

    const docRef = await setDoc(ref, {
        //object to update in document except the id of the document
    }
    ).then(function(){
        // if the document added successful
    }).catch(function(err){
        //if has an error
    })
}

//delete document
async function removeDocument(){
    const db = getDatabase();
    var ref = doc(db,"(name of colection)","id of document");
    const docSnap = await getDoc(ref);

    if(!docSnap.exists()){
        //if the document is not found
        return;
    }

    await deleteDoc(ref)
    .then(function(){
        //delete the document is successful
    })
    .catch(function(err){
        //if has an error
    })
}

//get all collections
async function getAllCollection(){
    const db = getDatabase();
    var ref = collection(db,"(name of colection)");
    const querySnap = await getDoc(ref);

    querySnap.foreach(function(doc){
        //do something with the doc
    })
}

//get all collections
async function getAllCollection(){
    const db = getDatabase();
    // Get a reference to the collection
    const collectionRef = db.collection('name collection');

    // Get all documents in the collection
    collectionRef.get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    })
    .catch((error) => {
        console.error("Error getting documents: ", error);
    });
}