import React from 'react'


/**
 * @class NavBar
 * @description: Exporta por padrão um NavBar.
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 * 
 * @returns {NavBar}
 */
export default function NavBar() {

    return (
        <nav className="navbar navbar-dark bg-dark row justify-content-center">
            <a className="navbar-brand col-1" href='/'>Tarefas</a>
        </nav>
    )
}
