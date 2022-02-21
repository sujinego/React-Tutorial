import React from "react";

class Customer extends React.Component { 
    render() {
        return(
        <div>
           <CustomerProfile id={this.props.id} name={this.props.name}/>
           <CustomerInfor birth={this.props.birth} gender={this.props.gender} job={this.props.job}/>
        </div>
        )
    }
}

class CustomerProfile extends React.Component { 
    render() {
        return (
            <div>
                <h2>{this.props.id}({this.props.name})</h2>
            </div>
        )
    }
}

class CustomerInfor extends React.Component { 
    render() {
        return (
            <div>
                <p>{this.props.birth}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;