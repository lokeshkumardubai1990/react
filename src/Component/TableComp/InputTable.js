import React, { Component } from "react";
import './style.css'

class InputTable extends Component {
    state = {
        data: [
            {
                id: 1,
                name: "first",
                age: "20",
                gender : "Male"
            },
            {
                id: 2,
                name: "Second",
                age: "30",
                gender : "Male"
            },
            {
                id: 3,
                name: "Third",
                age: "40",
                gender : "Male"
            }
        ],
        rowValues : {}
    };

    handleNameUpdate = (id, name) => {
        const { data } = this.state;
        const newData = data.map(row => {
            if (row.id === id) {
                return {
                    ...row,
                    name
                };
            }
            return row;
        });
        this.setState({ data: newData });
    }

    handleSelect = (id, gender) => {
        const { data } = this.state;
        const newData = data.map(row => {
            if (row.id === id) {
                return {
                    ...row,
                    gender
                };
            }
            return row;
        });
        this.setState({ data: newData });
    }

    selectedRows = (data) => {
        this.setState({ rowValues: data });
    }

    render() {
        return (
            <div className="App">
                <div className="table-input">
                    <table className="table-inp">
                        <thead>
                            <tr className="col-md">
                                <th>Select</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Updated Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(row => (
                                <TableRow
                                    key={row.id}
                                    data={row}
                                    onNameUpdate={this.handleNameUpdate}
                                    onSelectChange = {this.handleSelect}
                                    selectedRowData = {this.selectedRows}
                                />
                            ))}
                        </tbody>
                    </table>
                    <hr/>
                    <div>
                        {JSON.stringify(this.state.rowValues)}
                    </div>
                </div>
            </div>
        );
    }
}

class TableRow extends Component {
    handleChange = e => {
        this.props.onNameUpdate(this.props.data.id, e.target.value);
    };

    handleSelect = (e) => {
        this.props.onSelectChange(this.props.data.id, e.target.value);
    }

    handleSubmit = (e, rowData) => {
        this.props.selectedRowData(rowData.data);
        console.log(rowData.data);
    }
    render() {
        const {
            data: { id, name, age, gender }
        } = this.props;

        return (
            <tr>
                <td>
                    <input type='checkbox' value={id} />
                </td>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>
                    <select value={gender} onChange={this.handleSelect}>
                        <option name="male"> Male</option>
                        <option name="female">Female</option>
                    </select>
                </td>
                <td>
                    <input type="text" value={name} onChange={this.handleChange} />
                </td>
                <td>
                    <button id={id} value={this.props} onClick={(e) => { this.handleSubmit(e, this.props) }}>Submit</button>
                </td>
            </tr>
        );
    }
}

export default InputTable;