import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Jumbotron from '../components/Jumbotron'
import Table from '../components/Table';
import { changeInput , fetchData} from "../redux/actions/home.action";


class Home extends React.Component {

  componentWillReceiveProps(nextProps){
    if (this.props.search !== nextProps.search) {
      // this.props.history.push('/about');
    }
  }
    
  handleChange = e => {
  this.props.changeInput({prop:e.target.name, value:e.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        const {search} = this.props;
        this.props.changeInput({prop:'err', value:false});
        if (search === '') {
          this.props.changeInput({prop:'err', value:true});
        }
   
       this.props.fetchData(search);
    };
    render() {
      const {search, results, err} = this.props;
        return (
            <div className="container">
                < Table content={results} label={'Home Table'}/>
                <div>
                    <form>
                        <input
                            type="text"
                            value={search}
                            name='search'
                            onChange={this.handleChange}/>
                        <button className="btn btn-outline-success my-2 my-sm-0"  id='search-btn' onClick={this.handleSubmit}>Search</button>
                    </form>
                </div>
                {err? <span> Input Error</span>: null}
            </div>
        );
    }
};

const mapStateToProps =(state)=>{
const {value, search, results, err} =state.home;
return { value, search, results, err};
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInput: (props, value) => dispatch(changeInput(props, value)),
    fetchData: (payload) => dispatch(fetchData(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);