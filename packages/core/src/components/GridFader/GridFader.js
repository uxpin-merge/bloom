//@flow
import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import cx from 'classnames';

import getRandomInt from '../../utils/getRandomInt';
import css from './GridFader.css';
import transitions from './Animation.css';

type Grid = {
  key: string | number,
}

type Props = {
  grid: Array<Grid>,
  GridItemComponent: string | Function,
  columnClass: string,
  limit: number,
  swapInterval: number,
}

type State = {
  grid: Array<any>,
  queue: Array<any>,
}
export default class GridFader extends React.Component<Props, State> {
  interval: any

  static defaultProps = {
    grid: [],
    limit: 30,
    GridItemComponent: 'div',
    swapInterval: 2100,
  };

    state = {
      grid: this.props.grid.slice(0, this.props.limit),
      queue: this.props.grid.slice(this.props.limit, this.props.grid.length),
    };

  componentDidMount() {
    const { swapInterval } = this.props;
    this.interval = setInterval(this.updateQueue, swapInterval);
  }

  componentWillReceiveProps(props: Props) {
    const { grid, limit } = props;

    this.setState({
      grid: grid.slice(0, limit),
      queue: grid.slice(limit, grid.length),
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateQueue = (): void => {
    const { limit } = this.props;
    // clone the grid and queue so we can use mutative methods
    const grid = [...this.state.grid];
    const queue = [...this.state.queue];
    const replaceIndex = getRandomInt(0, limit);
    const removedItem = grid.splice(replaceIndex, 1, queue.shift());
    queue.push(removedItem[0]);

    this.setState({ grid, queue });
  }

  render() {
    const { columnClass, GridItemComponent, swapInterval } = this.props;
    const { grid } = this.state;

    const columnClasses = cx(css.column, columnClass);

    return (
      <div className={css.row}>
        {grid.map((item, i) => (
          /*
            Supplying the index as the key to the outer most `<div />` is
            intentional. This means the `<div />` and, more importantly,
            `<Swap />` doesn't get rerendered when the Logo changes.
          */
          <div key={i} className={columnClasses}>
            {/*
                `animationTimeout` has to be shorter than the interval to
                ensure that the animation has finished before we swap out
                another element. Without it, it's possibly we'll swap
                out the same element while it's animating in or out,
                causing an additional element to render for a short period
                of time, causing the grid to break
              */}
            <CSSTransitionGroup
              transitionName={transitions}
              transitionEnterTimeout={swapInterval - 100}
              transitionLeaveTimeout={swapInterval - 100}
            >
              <GridItemComponent {...item} key={`logo-${item.key}`} />
            </CSSTransitionGroup>
          </div>
        ))}
      </div>
    );
  }
}
