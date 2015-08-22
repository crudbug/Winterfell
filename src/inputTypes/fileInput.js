var React = require('react');

class FileInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value : this.props.value
    };
  }

  handleChange(e) {
    this.setState({
      value : e.target.value
    }, this.props.onChange.bind(null, e.target.value));
  }

  render() {
    return <input type="file"
                  name={this.props.name}
                  className={this.props.classes.file}
                  onChange={this.handleChange.bind(this)} />
  }

};

FileInput.defaultProps = {
  classes   : {},
  name      : undefined,
  value     : undefined,
  onChange  : () => {}
};

module.exports = FileInput;