import * as React from 'react';
import { Chart, Axis, Legend, Interval, Tooltip } from 'viser-react';
import * as _ from 'lodash';
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const data = [{"Party":"NPP","Greater Accra":504,"Upper East":339,
"Central Region":334,"Oti Region":818,"Savannah Region":572,
"Ahafo Region":966,"Volta Region":667,'Eastern Region' : 542,
 'Ashanti Region' : 200, 'North East Region' : 535, 'Bono Region' : 756,
 'Western Region' : 453, 'Nothern Region' : 785, 'Upper West Region' : 615 }
 ,{"Party":"NDP",
"Greater Accra":583,"Upper East":640,"Central Region":153,
"Oti Region":257,"Savannah Region":724,"Ahafo Region":159,
"Volta Region":277,'Eastern Region' : 542,
'Ashanti Region' : 200, 'North East Region' : 535, 'Bono Region' : 756,
'Western Region' : 453, 'Nothern Region' : 985, 'Upper West Region' : 615 },
{"Party":"NHP","Greater Accra":910,
"Upper East":669,"Central Region":642,"Oti Region":943,
"Savannah Region":762,"Ahafo Region":681,"Volta Region":573, 'Eastern Region' : 542,
'Ashanti Region' : 200, 'North East Region' : 535, 'Bono Region' : 756,
'Western Region' : 453, 'Nothern Region' : 885, 'Upper West Region' : 615 },
{"Party":"OOO","Greater Accra":270,"Upper East":207,"Central Region":204,
"Oti Region":160,"Savannah Region":420,"Ahafo Region":124,"Volta Region":205,
 'Eastern Region' : 542,
'Ashanti Region' : 200, 'North East Region' : 535, 'Bono Region' : 756,
'Western Region' : 453, 'Nothern Region' : 885, 'Upper West Region' : 615 },
];
const percs = ['Greater Accra', 'Upper East', 
'Central Region', 'Oti Region', 'Savannah Region',
 'Ahafo Region', 'Volta Region', 'Eastern Region',
 'Ashanti Region', 'North East Region', 'Bono Region', 
 'Western Region',
 'Nothern Region' ,
 'Upper West Region' ,
  ];

const dv = new DataView();
dv.source(data)
  .transform({
    type: 'fold',
    fields: percs,
    key: 'perc',
    value: 'population',
    retains: [ 'Party' ]
  })
  .transform({
    type: 'map',
    callback: obj => {
      const key = obj.perc;
      let type;
      if (key === 'Greater Accra' || key === 'Upper East' || key === 'Central Region') {
        type = 'a';
      } else if (key === 'Oti Region' || key === 'Savannah Region' || key === 'Ahafo Region' ) {
        type = 'b';
      } else if (key === 'Volta Region' || key === 'Eastern Region' || key === 'Ashanti Region' ) {
        type = 'c';
      } else {
        type = 'd';
      }
      obj.type = type;
      return obj;
    }
  });

const scale = [{
  dataKey: 'population',
  tickInterval: 600,
}];

const colorMap = {
  'Greater Accra': '#E3F4BF',
  'Upper East': '#BEF7C8',
  'Central Region': '#86E6C8',
  'Oti Region': '#36CFC9',
  'Savannah Region': '#209BDD',
  'Ahafo Region': '#1581E6',
  'Volta Region': '#0860BF',
  'Eastern Region' : '#00848C',
  'Ashanti Region' : '#004156',
  'North East Region' : '#5BFF62',
  'Bono Region' : '#1E3C00',
  'Western Region' : '#FFD600',
  'Nothern Region' : '#FBFF00',
  'Bono East Region' : '#F85C50',
  'Upper West Region' : '#FF005C',
  'Western North Region' : '#FF0000',

};

export default class Dash extends React.Component {

  render() {
    return (
      <div>
        <Chart forceFit height={400} padding={[20, 160, 80, 60]} data={dv} scale={scale}>
          <Tooltip />
          <Legend position="right" />
          <Axis dataKey="population" label={{
            
          }}/>
          <Interval position="Party*population"
            color={['perc', (perc) => {
              return colorMap[perc];
            }]}
            tooltip={['perc*population', (perc, population) => {
              return {
                name: perc,
                value: population
              };
            }]}
            adjust={[
              {
                type: 'dodge',
                dodgeBy: 'type', 
                marginRatio: 0 ,
              },
              {
                type: 'stack'
              }
            ]}
          />
        </Chart>
      </div>
    );
  }
}


