import React from 'react';
import Chip from 'material-ui/Chip';
import { orange100 } from 'material-ui/styles/colors';


/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onTouchTap` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
export default class ChipExampleArray extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {
      chip: {
        margin: 10,
        backgroundColor: orange100,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  renderChip(data, key) {
    return (
      <Chip
        key={key}
        style={this.styles.chip}
      >
        {data}
      </Chip>
    );
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.props.data.map((chip, index) => this.renderChip(chip.label, index))}
      </div>
    );
  }
}

