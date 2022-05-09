import React, { Component } from "react";
    import { Steps, Input, Form, Button, Space, message } from "antd";
    import MyInput from "../../Components/Input/MyInput";
    import CompleteTable from "./CompleteTable";
    
    import "./AddTable.css";
    
    const { Step } = Steps;
    
    const steps = [
      {
        title: "Configure Table",
      },
      
    ];
    
    class AddTable extends Component {
      constructor(props) {
        super(props);
        this.state = {
          current: 0,
          name: null,
          Region: null,
          subInsitedescriptionfo: null,
          latitude: null,
          longitude: null,
         
     };
        
        this.configTableChange = this.configTableChange.bind(this);
       
      }
      
      
      
      redirectToHome = () => {
        this.props.history.push("/allTables");
      };
      render() {
        const current = this.state.current;
        switch (current) {
          case 0:
            return (
              <div className="add_wrapper">
                <Steps current={this.state.current}>
                  {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps>
                <ConfigureTable
                  
                  configTableChange={this.configTableChange}
                ></ConfigureTable>
              </div>
            );
          
          
          case 1:
            return (
              <div className="add_wrapper">
                <Steps current={this.state.current}>
                  {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps>
                <CompleteTable
                  redirectToHome={this.redirectToHome}
                  tableinfo={this.state}
                  
                ></CompleteTable>
              </div>
            );
        }
      }
    }
    
    export default AddTable;