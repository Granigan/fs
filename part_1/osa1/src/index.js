import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }
  
    return (
      <div>
        <Otsikko title={kurssi} />
        <Sisalto first={osa1.nimi} first_tasks={osa1.tehtavia}
            second={osa2.nimi} second_tasks={osa2.tehtavia}
            third={osa3.nimi} third_tasks={osa3.tehtavia}/>
        <Yhteensa ft={osa1.tehtavia} st={osa2.tehtavia} tt={osa3.tehtavia} />
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
            <Osa text={props.first} tasks={props.first_tasks} />
            <Osa text={props.second} tasks={props.second_tasks} />
            <Osa text={props.third} tasks={props.third_tasks} />
        </div>
    )
}

const Osa = (props) => {
    return (
        <p>{props.text} {props.tasks} </p>
    )
}

const Yhteensa = (props) => {
    return (
        <p>Yhteensa {props.ft + props.st + props.tt} tehtävää. </p>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
