import React from 'react';
// 4 - importação de componentes
import FirstComponents from './components/FirstComponents';
// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';
// 6 - useState
import State from './components/state';

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
            <SecondComponent name = "Segundo"/>
            <Destructuring title = "Primeiro post" content="Algum conteudo" commentsQty={10} tags={["ts, js"]}/>
            <Destructuring title = "segundo post" content="novo conteudo" commentsQty={14} tags={["c#, java"]}/>
            <State/>
        </div>
    );
}

export default App