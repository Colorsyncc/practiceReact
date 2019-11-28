import React from 'react';

// Aqui en el parametro props recibimos lo que nos envian desde App.js
// Puede tener cualquier nombre y siempre va a recibir lo que le pasaron desde otro componente
const Name = props => {

    //Aqui por consola mostramos las propiedades que nos llegaron desde App.js
    console.log('props',props);

    // Aqui mostramos especificamente nombre
    // Como estamos recibiendo un objeto la forma de entrar a nombre es como lo ves aca
    console.log('nombre', props.name);

    return (
        <div className="container">
            Este div lo agrego solo para mostrar algo, mira la consola de Chrome :V
        </div>
    )
}

export default Name;