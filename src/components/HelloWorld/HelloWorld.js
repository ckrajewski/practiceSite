import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { fetchStuff } from "../../actions/action"
class HelloWorld extends React.Component {

  render() {
  	return (
    <div>
    Hello World!
     </div> 
    );
  }
}

const mapToStateProps = (state) => {
    return {
      data: state.weather
    };
  };

const mapDispatchToProps = dispatch => ({
  fetchStuff: () => dispatch(fetchStuff())
});


export default connect(mapToStateProps,mapDispatchToProps)(HelloWorld);