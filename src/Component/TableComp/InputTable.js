import React, { Component } from "react";
import './style.css'

class InputTable extends Component {
    state = {
        data: [
            {
                id: 1,
                name: "first",
                age: "20",
                gender: "Male",
                rowBtnEnable: true
            },
            {
                id: 2,
                name: "Second",
                age: "30",
                gender: "Male",
                rowBtnEnable: true
            },
            {
                id: 3,
                name: "Third",
                age: "40",
                gender: "Male",
                rowBtnEnable: true
            }
        ],
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

    onSingleSubmit = (data) => {
        this.setState({ singleRowSubmit: data });
    }

    checkedRows = (e, dataRows) => {
        if (e.target.checked) {
            this.setState((prevState) => ({
                rowValues: prevState.rowValues.concat(dataRows.data)
            }));
        } else {
            const removedData = this.state.rowValues && this.state.rowValues.filter(function (removeData) {
                return removeData.id.toString() !== e.target.value;
            });
            this.setState({ rowValues: removedData });
        }
    }

    onSubmitAll = (selData) => {
        console.log(selData);
        this.setState({ checkedRowsSel: selData });
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
                                    onSelectChange={this.handleSelect}
                                    selectedRowData={this.onSingleSubmit}
                                    checkedRows={this.checkedRows}
                                />
                            ))}
                        </tbody>
                    </table>
                    <div className='sbt-all-btn'>
                        <button className='btn btn-primary' disabled={this.state.rowValues.length > 1 ? false : true} onClick={(e) => { this.onSubmitAll(this.state.rowValues) }}>Submit All</button>
                    </div>
                    <hr />
                    <div>
                        <b>Checked Rows : </b>{JSON.stringify(this.state.rowValues)}
                    </div>
                    <hr />
                    <div>
                        <b>Data Received for Single Submit  : </b> {JSON.stringify(this.state.singleRowSubmit)}
                    </div>
                    <hr />
                       <b> Data Received for Submit All : </b> {JSON.stringify(this.state.checkedRowsSel)}
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
    }

    handleChecked = (e, rowData) => {
        this.props.checkedRows(e, rowData);
        if (e.target.checked) {
            rowData.data.rowBtnEnable = false;
        } else {
            rowData.data.rowBtnEnable = true;
        }

    }

    render() {
        const {
            data: { id, name, age, gender, rowBtnEnable }
        } = this.props;

        return (
            <tr>
                <td>
                    <input type='checkbox' value={id} onChange={(e) => { this.handleChecked(e, this.props) }} />
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
                    <button className='btn btn-success' id={id} value={this.props} disabled={rowBtnEnable} onClick={(e) => { this.handleSubmit(e, this.props) }}>Submit</button>
                </td>
            </tr>
        );
    }
}

export default InputTable;