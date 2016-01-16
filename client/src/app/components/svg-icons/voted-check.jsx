var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;
var Colors = mui.Styles.Colors;

var VotedCheck = React.createClass({

  render: function () {
    var style = {
      width: '12px',
      height: '12px',
    };
    return (
      <SvgIcon style={style} >
        <path fill={this.props.data} d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
      </SvgIcon>
    );
  }
});

module.exports = VotedCheck;
