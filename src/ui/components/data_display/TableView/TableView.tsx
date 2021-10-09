import React, { Component } from "react";
import { TableViewContainer } from "./TableViews.style";
import { Container } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface TableProps2 {
  rows: any[];
  columns: any[];
  pageSize?: number;
  rowsPerPageOptions?: any[];
  checkboxselection?: boolean;
  name: string;
}

interface TableProps {
  name: string;
}

interface Data {
  values: any[];
  baseUrl: string;
  rows: any[];
  columns: any[];
}

class TableView extends Component {
  props: TableProps;
  state: Data;
  constructor(props: TableProps) {
    super(props);
    this.props = props;
    this.state = { values: [], baseUrl: "", rows: [], columns: [] };
    const baseUrl = "http://localhost:5000/api/get/";
    this.state.baseUrl = baseUrl + props.name;
  }

  componentDidMount() {
    fetch(this.state.baseUrl)
      .then((res) => res.json())
      .then((json) => this.setState({ values: json }));
  }

  createGridColumnDef() {
    var retorno: any[];
    var retorno = [];
    try {
      var fields = Object.keys(this.state.values[0]);
      return fields;
    } catch {
      return [];
    }
    fields.forEach((valor) => {
      if (valor != "_id") {
        var linha = {
          field: valor,
          headerName: valor,
        };
        retorno.push(linha);
      }
    });
    return retorno;
  }

  uniqueRowID() {
    var new_object: any[];
    new_object = [];
    this.state.values.forEach((item, index) => {
      item.id = index;
      this.state.rows.push(item);
    });
  }

  render() {
    console.log(this.state.baseUrl)
    var columns: any[];
    columns = this.createGridColumnDef();
    this.uniqueRowID();
    console.log("Columns = ", columns);
    console.log("Row = ", this.state.rows);
    // console.log(this.props.name, this.state);
    return (
      <Container>
        <TableViewContainer>
          <TableContainer>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label={"table for " + this.props.name}
            >
              <TableHead>
                <TableRow>
                  {columns.map((nome, index) => {
                    return (
                      <TableCell align="right" key={index}>
                        {" "}
                        {nome}{" "}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rows.map((row, index) => (
                    <TableRow 
                    key={row._id}
                    sx={{'&:last-child td, &:last-child th': { border: 0 }}}
                    >
                      {columns.map((valor, index) => {
                        var value = row[valor]
                       return  <TableCell align="right" key={index}>{value}</TableCell>
                      })}

                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TableViewContainer>
      </Container>
    );
  }
}

export default TableView;
