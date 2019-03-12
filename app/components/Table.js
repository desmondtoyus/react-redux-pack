import React, { Component } from "react";
import PropTypes from 'prop-types';


class Table extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const {content, label } = this.props;
        return(
            <main>
                {content.length? <div>
                <span> {label} </span>
            <table className="table  table-sm">
            <thead className="table-info">
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Registration Date</th>
                    <th>E-mail address</th>
                    <th>Premium Plan</th>
                </tr>
            </thead>
            <tbody>
                {content.map((item, index)=>{
                    return <tr key={index}>
                    <td>
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input"/>
                            <span className="custom-control-indicator"></span>
                        </label>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.email}</td>
                    <td>{item.plan}</td>
                </tr>
                })}
            </tbody>
        </table>
        </div>:<span> No Content</span>}
    </main>
        )
    }
}

// Do not include required props in the defaultProps
Table.propTypes = {
    label: PropTypes.string.isRequired,
  content: PropTypes.array
  };
  
  Table.defaultProps = {
    content: [],
  };

  export default Table;