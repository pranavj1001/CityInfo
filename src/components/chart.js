import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const findAverage = (data) => (_.round(_.sum(data) / data.length));

export default (props) => (
    <div>
      <Sparklines height={100} width={150} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{findAverage(props.data)}{props.units}</div>
    </div>
  );
