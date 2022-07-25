//home.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { genAdd , genMins , genAsync } from '../store/action'
class about extends PureComponent {
  state = {count:1 , store:0}
  change = (e)=>{
    this.setState({count:Number(e.target.value)})
  }
  render() {
    const { add , mins , async , count:state } = this.props
    // console.log(add ,mins , async , state);
    const { count } = this.state
    
    return (
      <div>
        store:{ state }
        <div>
        <input type="text" value={count} onChange={this.change}/>
        <div>
          <button onClick={()=>add(count)}>加</button>
          <button onClick={()=>mins(count)}>减</button>
          <button onClick={()=>async(count)}>异步加</button></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    count:state.count
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    add:(count)=>{
      return dispatch(genAdd(count))
    },
    mins:(count)=>{
      return dispatch(genMins(count))
    },
    async:(count)=>{
      return dispatch(genAsync(count))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(about)
