import React from 'react';
// 4 - importação de componentes
import FirstComponents from './components/FirstComponents';

function App(){
    // 1 - variaveis
    const name: string = "Victor"
    const age: number = 21;
    const isWorking:boolean = true;


    // 2 - funções 
    const userGreeting = (name:string): string =>{
        return `Olá, ${name}`
    }
    return(
        <div className="App">
            <h1>Typescript com React</h1>
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            {isWorking &&(
                <p>Esta trabalhando</p>
            )}
            <h3>{userGreeting(name)}</h3>
            <FirstComponents/>
        </div>
    );
}

export default App