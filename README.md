# reactjs-ignite-updated-22-path
Rocketseat's ReactJS Bootcamp - Project 01 with freshly updated 2022 reactjs contents used in the market across the world


- Iniciando com React 

 > Fundamentos do ReactJS:

  -> SSR (Server Side Rendering) = back + front end > Browser
  -> SPA (Single Page Application)= back end > JSON > Web(React)/Mobile(RNative) > Browser/iOS/Android 


 > Bundlers & Compilers

  -> Bundler = Babel X
  -> Compiler = Vite Ok


 > Criando um projeto

  -> Node version control chamado apenas de "n" = npm install -g n ou n install lts
  -> npm -v
  -> node -v
  -> npm create vite@latest
  -> selecionar react ou react-ts (react + typescript). É possível iniciar com react apenas e depois mudar ou adicionar ou converter para o ts.
  -> React = Core do react que é base para web, mobile, tv etc...
  -> React DOM = Web
  -> React Native = Mobile


 > Components:

  -> funcinam como tags do HTML
  -> Uma função que retorna HTML
  -> Pode ser quebrado partes menores e ser reusado/repetido várias vezes
  -> JSX = JS + XML
  -> Usar div para empacotar os elementos dos componentes se mais que 1
  -> Usar de preferência Named Export como no segundo exemplo abaixo ... em Post.jsx...

ex.:
 
function App() {
  return (
   ...
  )
}

ou

... em Post.jsx...

export function Post(props) {
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
            <p>{props.separator}</p>
        </div>
    )
}

... que exporta para App.jsx...

import {Post} from './Post';

export function App() {
  return (
    <div>
     <Post
      author="Alexandre Paes"
      content="Any simple text"
      separator="-----------------------------------------"
     />
     <Post
      author="Alex Monteiro"
      content="Any simple text once again"
      separator="-----------------------------------------"
     />
    </div>
  )
}

... e que main.jsx importa { App } from './App'...


import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


 > Propriedades:

  -> São informações que passamos para componentes
  -> Geralmente são em formato de objetos "{key: value}"
  -> Ótimo reaproveitamento de html, css, etc...
  -> Diferencia atributos/propriedades na reutilização de código
  -> Utiliza dot notation dentro de {} ex.: 

  export function Post(props) {
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
            <p>{props.separator}</p>
        </div>
    )
}

---------------------------------------------------

 > Estrutura da Aplicação
 
  -> Focus in CSS related contents. Recap this later for catching the details

---------------------------------------------------

- Os Motores do React

 > Estado (useState):

  -> Post.jsx
  -> utiliza reações às ações dos usuários como os botões de submit post (publicar) por exemplo
  -> usa funções como abaixo:
   
   const comments = [
     
     1,
     2,
   ];
   
   export function Post(etc...
        const publishedDateFormatted = etc...
        
        const etc...
        
 	function handleCreateNewComment() {
 	
 	  event.preventDefault()
 	  
 	  comments.push(3)
 	  
 	  console.logs(comments);
 	}
 	
  -> Somente com formato acima, não é possível que o React observa as mudanças de estados das variáveis ou componentes, logo, reações não serão refletidas na interface do usuário, por isso a necessidade do conceito de useState, para garantir que o React seja mais performático, não sendo obrigado a ouvir a tudo mas somente aos que usarem esse conceito de estado ou useState para monitorá-los.
  -> Para que o monitoramento orgânico de mudanças de estados, useState, funcione como esperado na situação acima por exemplo, devemos fazer como mostra no código abaixo:   
   
   export function Post(etc...
   
   	const [comments, setComments] = useState([     
          1,
          2,
        ]);
   	
        const publishedDateFormatted = etc...
        
        const etc...
        
 	function handleCreateNewComment() {
 	
 	  event.preventDefault()
 	  
 	  setComments([1,2,3]);
 	}

  -> O final do modelo acima teria problemas para adicionar um novo comment de forma automática ao final ou logo depois do último publicado e, para sanar isso, refatore a linha 161 (setComments([1,2,3]); por (setComments([...comments, comments.length + 1]);
 
 
 
 > Inserindo Comentários (Programação Declarativa)
 
  -> 
  -> Conceitos de programação Imperativa vs Declarativa
  -> Imperativa: O que deve ser feito (Algoritmo/passo a passo)
  -> ex imperativa: Ligar o forno, abrir a porta do forno, colocar a assadeira, fechar a porta do forno, etc
  -> Declarativa: Quais as condições para ter o resultado final
  -> ex declarativa: o forno precisa estar aquecido,
  a porta precisa estar aberta para colocar a massa, a porta do forno precisa ser fechada para a massa ficar pronta no tempo estimado, a massa precisa estar pronta para desligar o forno, etc...


----------------------------------------------------------------------------------------------

- Aprimorando a Aplicação

 > Fundamentos do Typescript:

  -> 


######################################################