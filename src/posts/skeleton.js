import React from 'react';


const Skeleton = (props) => {
    return (
            <div className="twit_box" >
                <div className="twit_box_cap" >
                    <div className="twit_box_cap_photo">
                        <img src={props.photo} alt={props.photo}/>
                    </div>
                    <div className="twit_box_cap_name">
                        <h5>{props.name}</h5>
                        <div className="twit_box_cap_status">
                            <span>{props.nickname}  •{props.date}</span>
                        </div>
                    </div>
                    <div className="twit_box_cap_text">
                       <span>{props.content}</span>
                    </div>
                </div>
                <div className="twit_box_container">
                    <img src={props.image} alt={props.image}/>
                </div>
            </div>
    );
}
export default Skeleton;