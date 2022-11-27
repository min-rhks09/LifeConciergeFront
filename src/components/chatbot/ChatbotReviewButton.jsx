/* import axios from "axios";
import { fontWeight } from "@mui/system";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Eventcalendar, toast, getJson } from '@mobiscroll/react';
axios
.post("/chatbotUpdate", data)
.then((res) => {
  console.log("라우터다녀옴");
})
.catch((res) => {
  console.log("error");
}); */
import React, { Component } from "react";
import PropTypes from "prop-types";
class ChatbotReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transport: "",
      job: "",
      hobby: "",
      music: "",
      food: "",
      drink: "",
    };
  }
  componentWillMount() {
    const { steps } = this.props;
    const { transport, job, hobby, music, food, drink  } = steps;
    this.setState({ transport, job, hobby, music, food, drink });
  }
  render() { 
    let { transport, job, hobby, music, food, drink} = this.state;
    let data = {
      transport: transport.value,
      job: job.value,
      hobby: hobby.value,
      music: music.value,
      food: food.value,
      drink: drink.value,
    };
    return (
      <form onSubmit={"/chatbotUpdate"} method="post">
        <div style={{ width: "100%" }}>                                                        
                <qq style={{ fontSize: '15px',fontWeight: "bold",color: "white",}}>교통수단 : </qq>{transport.value}<br></br>
                <qq style={{ fontSize: '15px',fontWeight: "bold",color: "white",}}>직업 : </qq>{job.value}<br></br>
                <qq style={{ fontSize: '15px',fontWeight: "bold",color: "white",}}>취미 : </qq>{hobby.value}  <br></br>
                <qq style={{ fontSize: '15px',fontWeight: "bold",color: "white",}}>좋아하는 음악 : </qq>{music.value}<br></br>
                <qq style={{ fontSize: '15px',fontWeight: "bold",color: "white",}}>좋아하는 음식 : </qq>{food.value}<br></br>
                <qq style={{ fontSize: '15px',fontWeight: "bold",color: "white",}}>좋아하는 음료 : </qq>{drink.value}<br></br>
          <button type="submit" style={{border : '5px solid' ,borderRadius: '60px 60px 20px',borderColor:'#f39c12',color: 'white',background: '#f39c12',marginTop: '8px'}}> 응, 앞으로 잘 부탁해 </button>
        </div>
      </form>
    );
  }
}
ChatbotReview.propTypes = {
  steps: PropTypes.object,
};
ChatbotReview.defaultProps = {
  steps: undefined,
};
export default ChatbotReview;