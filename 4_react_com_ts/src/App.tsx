import React, {createContext} from 'react';
// 4 - importação de componentes
import FirstComponents from './components/FirstComponents';
// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';
// 6 - useState
import State from './components/State';

// 11 - usando dados do context
import Context from './components/Context';

// 9 - type
type textOrNull = string | null
type fixed = "Isso" | "ou" | "Aquilo"

// 10 - context

interface IAppContext {
    language: string,
    framework: string,
    projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)
function App(){
    // 1 - variaveis
    const name: string = "Victor"
    const age: number = 21;
    const isWorking:boolean = true;


    // 2 - funções 
    const userGreeting = (name:string): string =>{
        return `Olá, ${name}`
    }

    //  9 - types
    const myText : textOrNull = "tem algum texto aqui"
    let mySecondText: textOrNull = null

    // mySecondText = "opa"

    const testandoFixed: fixed = "Aquilo"

    // 10 - context API
    const contextValue: IAppContext = {
        language : "JavaScript",
        framework : "React",
        projects: 5,

    }

    

    return(
        <AppContext.Provider value = {contextValue}>
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
                <Destructuring title = "Primeiro post" content="Algum conteudo" commentsQty={10} tags={["ts, js"]} category={Category.TS}/>
                <Destructuring title = "segundo post" content="novo conteudo" commentsQty={14} tags={["python"]} category={Category.P}/>
                <State/>
                {myText &&
                    <p>Tem texto na variavel</p>
                }
                {mySecondText &&
                    <p>Tem texto na variavel</p>
                }
                <Context/>
            </div>
        </AppContext.Provider>
    );
}

export default App