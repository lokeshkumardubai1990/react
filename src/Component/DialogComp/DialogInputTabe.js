import React, { Component } from "react";
import './style.css'

class InputTable extends Component {
    state = {
        data: this.props.data,
        rowValues: [],
        checkedRowsSel: [],
        singleRowSubmit: {}
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

    render() {
        return (
            <div className="App">
                <div className="table-input" style = {{padding: '15px'}}>
                    <table className="table-inp">
                        <thead>
                            <tr className="col-md">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Updated Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(row => (
                                <TableRow
                                    key={row.id}
                                    data={row}
                                    onNameUpdate={this.handleNameUpdate}
                                    onSelectChange={this.handleSelect}
                                    selectedRowData={this.onSingleSubmit}
                                />
                            ))}
                        </tbody>
                    </table>
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

    render() {
        const {
            data: { id, name, age, gender, rowBtnEnable }
        } = this.props;

        return (
            <tr>
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
            </tr>
        );
    }
}

export default InputTable;