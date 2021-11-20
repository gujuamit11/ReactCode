import React,{ Component } from "react";
import EmpTable from "./empTable";

class Home extends React.Component {
    state = {
        count:0,
        employee:{
            empId:1001,
            empName:"Ram",
            salary:45000
        },
        employees:[
            { empId:1002,
                empName:"Sam",
                salary:45000
            },
            { empId:1003,
                empName:"Krishna",
                salary:45000
            },
            {
                empId:1004,
                empName:"Sita",
                salary:45000
            }
        ]
    }
    render() { 
        return <div>

                <h1> HOME </h1>
                <EmpTable
                    employees={this.state.employees}
                    count={this.state.count}
                    employee={this.state.employee}
                />
        </div>;
    }
}
 
export default Home;