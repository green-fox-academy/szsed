import React from 'react';
import './App.css';
import firestoreDB from './firebase/firebase-setup';


firestoreDB.doc('Un0CHdNeWqgy9pBUMzrq').onSnapshot(doc => {
  console.log(doc.metadata.hasPendingWrites ? "Local" : "Server", doc.id, doc.data())
});

const handleAdd = () => firestoreDB.add({
  cica: 'yes',
  hello: 'world'
}).then(thing => console.log('HI', thing));

const handleSet = () => firestoreDB.doc('Un0CHdNeWqgy9pBUMzrq').set({
  cica: 'no',
  hello: 'world'
}).then(thing => console.log('HI', thing));

function App() {
  return (
    <div className="App">
      <button onClick={handleAdd}>ADD THING</button>
      <button onClick={handleSet}>SET THING</button>
    </div>
  );
}

export default App;
