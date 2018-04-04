import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => (
    <div>
      <Sparklines height={100} width={150} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
