import * as React from 'react';
import { Chart, Tooltip, Legend, Sector, Coord } from 'viser-react';

const data = [
  { party : 'NPP', percentage : 56 },
  { party: 'NPI', percentage: 38 },
  { party: 'NGP', percentage: 33.7 },
  { party: 'GPP', percentage: 30.7 },
  { party: 'NKP', percentage: 25.8 },
  
];

export default class PieChart extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data}>
        <Tooltip />
        <Coord type="polar" innerRadius={0.2} />
        <Legend position="bottom" dataKey="party" offsetX={-40} />
        <Sector position="party*percentage"
         color="party" style={{ stroke: '#fff', lineWidth: 1 }} />
      </Chart>
    );
  }
}





