import React from 'react';
import './Dropdown.css';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.list[0].item,
      dropdown: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleChange(event) {
    this.setState({
      selected: event.target.innerHTML,
    });
  }

  handleDrop() {
    this.setState({
      dropdown: !this.state.dropdown,
    });
  }

  render() {
    const { list, children } = this.props;
    const { selected, dropdown } = this.state;

    return (
      <div>
        <h1>{children}</h1>
        <div className="box" onClick={this.handleDrop}>
          { selected }
        </div>
        <div className={(dropdown) ? 'dropdown' : 'dropdown-hidden' }>
          {list.map((elemento) => (
            <div onClick={this.handleChange} className="item" key={elemento.id}>
              { elemento.item }
            </div>
          ))}
        </div>
       </div>
    );
  }
}

export default Dropdown;

Dropdown.defaultProps = {
  children: 'Título da lista customizado default',
};

Dropdown.propTypes = {
  children: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    item: PropTypes.string,
  })),
};