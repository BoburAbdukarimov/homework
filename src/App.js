import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Node from './components/Node';


function App() {
    return (
        <div className="App" style={{margin: 0, padding: 0, height: "95vh", position: "relative"}}>
            <Header />
            <Node />
            <Footer />
        </div>
    )
}
export default App;