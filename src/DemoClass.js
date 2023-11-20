import {Component} from "react";
import InSide from "./InSide";
import Life from "./Life";
 export default class DemoClass extends Component{
     constructor(props) {
         super(props)
         this.state = {
             isShow: false,
             num: 0
         }
     }
    render() {
        return(
            <>
                <button onClick={()=>{
                    this.setState((state) =>{
                        return{
                            isShow: !state.isShow
                        }
                    })
                }}>An/Hien</button>
                <button onClick={()=>{
                    this.setState((state)=>{
                        return{
                            num: state.num + 1
                        }
                    })

                }}>change</button>
                {this.state.isShow && <Life x={this.state.num}></Life>}
            </>
        )
    }
}

