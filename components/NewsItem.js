import React from "react";


 
const NewsItem = (props) => {
    return (
        <div className="col mb-5">
             <div className="card h-100">
                    <div className="card-body p-4">
                            <div className="text-center">
                                <h5 className="fw-bolder">{props.news.title}</h5>
                                {props.news.description}
                             </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            
                    </div>
             </div>
            </div>
    );
}


export default NewsItem;