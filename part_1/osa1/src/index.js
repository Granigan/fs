import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14
  
    return (
      <div>
        <Otsikko title={kurssi} />
        <Sisalto first={osa1} first_tasks={tehtavia1}
            second={osa2} second_tasks={tehtavia2}
            third={osa3} third_tasks={tehtavia3}/>
        <Yhteensa ft={tehtavia1} st={tehtavia2} tt={tehtavia3} />
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
