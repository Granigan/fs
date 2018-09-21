import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }
      
    return (
      <div>
        <Otsikko title={kurssi.nimi} />
        <Sisalto osat={kurssi.osat} />
        <Yhteensa osat={kurssi.osat} />
      </div>
    )
}

const Otsikko = (props) => {
    return (
        <h1>{props.title}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa data = {props.osat[0]} />
            <Osa data = {props.osat[1]} />
            <Osa data = {props.osat[2]} />
        </div>
    )
}

const Osa = (props) => {
    return (
        <p>{props.data.nimi} {props.data.tehtavia} </p>
    )
}

const Yhteensa = (props) => {
    return (
        <p>Yhteensa {props.osat[0].tehtavia + props.osat[1].tehtavia 
            + props.osat[0].tehtavia} tehtävää. </p>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
