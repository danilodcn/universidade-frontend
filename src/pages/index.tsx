import PageTitle from "ui/components/data_display/PageTitle/PageTitle";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironmet";
import TabView from "ui/components/data_display/TabsView/TabsView";

import { useAsync } from "react-async";
import React, { Component } from "react";
import axios from "axios";
import Table from "ui/components/data_display/TableView/TableView";

const fetchAllNames = async () => {
  const response = await fetch("http://localhost:5000/api/allNames");
  if (!response.ok) throw new Error(response.status.toString());
  return response.json();
};

const funcao = async () => {
  const url = "http://localhost:5000/api/allNames";
  var valor = axios.get(url);
  return valor;
};

import { NextPage } from "next";

interface Data {
  allNames: string[];
}

class Home extends Component {
  state: Data;

  constructor() {
    super([]);
    this.state = { allNames: [] };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/allNames")
      .then((res) => res.json())
      .then((json) => this.setState({ allNames: json }));
  }

  render() {
    // const { data, error } = useAsync({ promiseFn: fetchAllNames });
    console.log(this.state);
    return (
      <div>
        <SafeEnvironment />
        <PageTitle
          title={"Acesse o Sistema"}
          subtitle={"Veja todos os registros salvos no banco de dados"}
        />
        <TabView titles={this.state.allNames}>
          {this.state.allNames.map((name: string, index: number) => {
            return <Table name={name} key={index}></Table>;
          })}
        </TabView>
      </div>
    );
  }
}
export default Home;
