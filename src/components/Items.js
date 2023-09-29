import React from "react";
import { useSelector } from "react-redux";

const Items = () => {
    let appState = useSelector(state => state.app);
    let itemsArr = appState.items;
    return (
            <div className="col-7 offset-1 my-3 bg-light">
                <div className='row justify-content-center'>
                    {itemsArr.map((item, index) => {
                        if (item.quantity === 0) {
                            return (
                                <div className="col-4 pt-2 justify-content-center text-center border border-3 border-secondary" key={index}>
                                    <img className="img-fluid bg-light" src="https://halal-lifestyle.sg/wp-content/uploads/2020/06/out-of-stock-png-1-transparent.png" alt="Candy/Chips Wrapper" />
                                    <p className="bg-dark text-light border border-light"><b>{item.position}</b></p>
                                </div>
                            )    
                        } else {
                            return (
                                <div className="col-4 pt-2 justify-content-center text-center border border-3 border-secondary" key={index}>
                                    <img className="img-fluid bg-secondary" src={item.image} alt="Candy/Chips Wrapper"/>
                                    <p className=" bg-dark text-light border border-light"><b>{item.position}</b></p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
    )
}
export default Items;