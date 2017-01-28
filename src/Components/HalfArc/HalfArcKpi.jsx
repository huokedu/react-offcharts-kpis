import React, { Components, PropTypes } from 'react';
import Chart from 'react-offcharts-core/Components/Chart';
import ReactIf from 'react-offcharts-core/Components/ReactIf';
import Gradients from 'react-offcharts-core/Components/Defs/Gradients';
import guid from 'react-offcharts-core/Utils/guid';
import HalfArcContainer from './HalfArcContainer';
import Text from './Text';
import { textProps, fillAndStroke, dataShape } from '../../Utils/props';

const HalfArcKpi = props => (
  <Chart
    width={props.width}
    height={props.height}
    responsive={props.responsive}
    id={props.id}
    className={props.className}
  >
    <HalfArcContainer
      range={props.range}
      background={props.background}
      value={props.value}
      animationTime={props.animationTime}
      animationEase={props.animationEase}
    />
  </Chart>
);

HalfArcKpi.defaultProps = {
  range: [0, 100],
};

HalfArcKpi.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  responsive: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  animationTime: PropTypes.number,
  animationEase: PropTypes.string,
  background: dataShape,
  value: dataShape,
  range: PropTypes.arrayOf(PropTypes.number),
};

export default HalfArcKpi;