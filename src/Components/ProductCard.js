

import React from "react";
import './ProductCard.css'

function VerticalCard(props){

  return(

            <div className="vertical_card">
              <img
                src={props.url}
                alt=""
                className="vertical_card__picture"
              ></img>
              <div className="vertical_card_text">
                <div className='vertical_card_text_flex'>
                  <h2>{props.name}</h2>
                </div>
                <div className="separator_black"></div>
                <p style={{marginBottom:0}}><span style={{fontWeight:600, fontSize:16}}> Price : </span>{props.price}</p>
                <p style={{marginBottom:0}}><span style={{fontWeight:600, fontSize:16}}>Size (mm) : </span> {props.desc}</p>
                <p style={{marginBottom:0}}><span style={{fontWeight:600, fontSize:16}}>Weight (kg) : </span> {props.weight}</p>
              </div>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:60}}>
                <div className="vertical_card_read_more_black">REF : {props.reference}</div>
              </div>
            </div>


        )
  }

  export default VerticalCard;
