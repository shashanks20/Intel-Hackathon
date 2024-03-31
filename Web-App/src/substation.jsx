import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Karnataka,
  Telangana,
  AndraPradesh,
  TamilNadu,
  Kerala,
  Pondicherry,
} from './substation1.js';
import Card from './card.jsx';

const Substation = () => {
  const { state } = useParams();

  let substationData;
  switch (state) {
    case 'Karnataka':
      substationData = Karnataka;
      break;
    case 'Telangana':
      substationData = Telangana;
      break;
    case 'AndraPradesh':
      substationData = AndraPradesh;
      break;
    case 'TamilNadu':
      substationData = TamilNadu;
      break;
    case 'Kerala':
      substationData = Kerala;
      break;
    case 'Pondicherry':
      substationData = Pondicherry;
      break;
    default:
      substationData = {};
  }

  const substationKeys = Object.keys(substationData);

  return (
    <div>
      <h2>{state.charAt(0).toUpperCase() + state.slice(1)}</h2>
      {substationKeys.map(substationName => (
        <Card
          key={substationName}
          state={state}
          substation={substationName}
          temperature={substationData[substationName].Temp}
          pressure={substationData[substationName].Pressure}
          humidity={substationData[substationName].Humidity}
          windSpeed={substationData[substationName]['Wind Speed']}
          risk= {substationData[substationName].Risk}
        />
      ))}
    </div>
  );
};

export default Substation;
