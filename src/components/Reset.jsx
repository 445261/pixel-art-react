import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';

export class Reset extends React.Component {
  handleClick() {
    this.props.resetGrid(
      this.props.columns,
      this.props.rows,
      this.props.activeFrameIndex);
  }

  render() {
    const style = {
      width: '80%',
      margin: '0.5em auto',
      display: 'table'
    };
    return (
      <button
        className="gray"
        style={style}
        onClick={() => { this.handleClick(); }}
      >
        RESET
      </button>
    );
  }
}

function mapStateToProps() {
  return {};
}
export const ResetContainer = connect(
  mapStateToProps,
  actionCreators
)(Reset);
