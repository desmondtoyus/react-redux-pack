import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Table from '../components/Table';
import { changeInput, fetchData } from '../redux/actions/home.action';


class Home extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { search } = this.props;
    if (search !== nextProps.search) {
      // this.props.history.push('/about');
    }
  }

  handleChange = (e) => {
    const {
      dispatchChangeInput,
    } = this.props;
    dispatchChangeInput({
      prop: e.target.name,
      value: e.target.value,
    });
  };

    handleSubmit = (event) => {
      event.preventDefault();
      const {
        search,
        dispatchChangeInput,
        dispatchFetchData,
      } = this.props;
      dispatchChangeInput({ prop: 'err', value: false });
      if (search === '') {
        dispatchChangeInput({ prop: 'err', value: true });
      }
      dispatchFetchData(search);
    };

    render() {
      const {
        search,
        results,
        err,
      } = this.props;
      return (
        <div className="container">
          <Helmet>
            <title>Page Title</title>
            <meta name="description" content="Meta descriptions.." />
          </Helmet>
          <Table content={results} label="Home Table" />
          <div>
            <form>
              <input
                type="text"
                value={search}
                name="search"
                id="search"
                onChange={this.handleChange}
              />
              <button className="btn btn-outline-success my-2 my-sm-0" name="search-btn" id="search-btn" type="submit" onClick={this.handleSubmit}>Search</button>
            </form>
          </div>
          {err ? <span> Input Error</span> : null}
        </div>
      );
    }
}

Home.propTypes = {
  search: PropTypes.string.isRequired, // default no needed if required
  results: PropTypes.arrayOf(PropTypes.object),
  err: PropTypes.bool,
  dispatchChangeInput: PropTypes.func,
  dispatchFetchData: PropTypes.func,
};
Home.defaultProps = {
  results: [],
  err: false,
  dispatchChangeInput: null,
  dispatchFetchData: null,
};

const mapStateToProps = (state) => {
  const {
    search,
    results,
    err,
  } = state.home;
  return {
    search,
    results,
    err,
  };
};

export const mapDispatchToProps = dispatch => ({
  dispatchChangeInput: evt => dispatch(changeInput(evt)),
  dispatchFetchData: payload => dispatch(fetchData(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
