import React, { Component } from 'react';

import { DynamicBarChart } from 'react-dynamic-charts';
import 'react-dynamic-charts/dist/index.css'; // Don't forget to import the styles

const Charts = ({
  data: { confirmed },
  country,
}) => {
 
    return (
      <DynamicBarChart
        data={confirmed.value}
      />
    )
    
};

export default Charts;

