// import the library of firebase, can import in local or AIP specific
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { get, getDatabase, ref, set, child, update, remove, onValue  } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
const firebaseConfig = {
  //API key of the Firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//insert into Firebase
function testInsert(){
  var db = getDatabase();
  set(ref(db, "(keyID)/"+ "keyObject"),{
    /// object with key to insert into Firebase
  }).then(function(){
    // after insert firebase is successfully
  }).catch(function(err){
    // if has any errors
  })
}

//get data from Firebase
function testGet(){
  var db = getDatabase();
  var dbRef = ref(db);
  get(child(dbRef,"(keyID)"))
  .then(function(data){
    // get was successfull
    if(data.exists()){
      //if e (data we getted) is exists
    }
  }).catch(function(err){
    // if has any errors
  })
}

//get all data from Firebase
function GetAll(){
  var db = getDatabase();
  onValue(ref(db), (snapshot) => {
    const data = snapshot.val();
    // now the data is a object with key in the result of the return
    // với data bây h object, ta gọi key của objecy để lấy được các khối data (tương tự Json)
  }, (error) => {
    // if has any errors
  });
}

//remoe the data in firebase
function removeF(){
  var db = getDatabase();
  remove(ref(db, "(keyID)/"+ "keyObject"))
  .then(function(){
    // it was removed
  }).catch(function(err){
    // if has any errors
  })
}

//updat data in firebase at key object
function updateF(){
    var db = getDatabase();
    update(ref(db, "(keyID)/"+ "keyObject"),{
        // data want to update
    })
    .then(function(){
      // it was removed
    }).catch(function(err){
      // if has any errors
    })
  }