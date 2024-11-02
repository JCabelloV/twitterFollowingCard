import { useState } from 'react'; //Manejar el estado del componente, forma de usar el dom virtual
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [{
    userName: "google",
    name: "google",
    initialIsFollowing: true
},
{
    userName: "kendricklamar",
    name: "Kendrick Lamar",
    initialIsFollowing: false

},
{
    userName: "trvisXX",
    name: "TRAVIS SCOTT",
    initialIsFollowing: false
},
{
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    initialIsFollowing: true
}
]
export function App() {
    //const formatUserName = (userName) => '@${userName}'
    //const formattedUserName = <span>@google</span> Estas son formas de formatear el nombre de usuario con el @
   
    return (
        <section className="App">
            {
                users.map(user=> {
                    const {userName, name, initialIsFollowing} = user
                    return (
                        <TwitterFollowCard
                        key={userName} //usar id si la base de datos da un id, la idea es que sea un identificador unico
                        userName={userName}
                        name = {name}
                        initialIsFollowing={initialIsFollowing}/>
                    )
                })
            }
           
        </section>
    )
}