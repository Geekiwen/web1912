import React from "react"
import { Link,NavLink } from "react-router-dom"
import "./NavComponent.css"

export default class NavComponent extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/listview">视图列表</NavLink></li>
                </ul>
            </div>
        )
    }
}