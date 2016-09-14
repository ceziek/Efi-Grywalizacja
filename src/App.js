import React, {Component} from 'react/';
import Header from './components/Header';
import Grywalizacja from './components/Grywalizacja';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Header/>
                </header>
                <main>
                    <section>
                        <Grywalizacja/>
                    </section>
                </main>
            </div>
        );
    }
}



export default App;
