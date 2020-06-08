import React from "react"
import NavComponent from "./NavComponent"
import { Link } from "react-router-dom"

export default class ListView extends React.Component{
    render(){
        const product = [
            {
                name:"瓜子饮料矿泉水",
                price:30
            },
            {
                name:"泡面啤酒火腿肠",
                price:40
            },
            {
                name:"来！腿收一收",
                price:"一顿暴走"
            }
        ]
        return(
            <div>
                <NavComponent />
                <ul>
                    {
                        product.map((element,index) =>{
                            return <li key={index}><Link to={ "/details/" + element.name +"/" + element.price}>{ element.name }</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}