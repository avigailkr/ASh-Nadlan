import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useSelector } from 'react-redux';

export default function statistic4() {

//   const idcity=useSelector
// (state=>state.statistic.city);
// const idtypesale=useSelector(state=>state.statistic.typesale);
// const fromyear=useSelector(state=>state.statistic.fromyear);
// const untilyear=useSelector(state=>state.statistic.untilyear);

  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['bar A', 'bar B', 'bar C'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [1000, 5000, 3],
        },
      ]}
      width={500}
      height={300}
    />
  );
}