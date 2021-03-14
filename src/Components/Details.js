import React from 'react';
import '../Styles/details.css';

class Details extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src="./Assets/homepageimg.png" alt="No Image, Sorry for the Inconvinience" width="100%" height="350" />
                    <button className="button">Click to see Image Gallery</button>
                </div>
                <div className="heading">The Big Chill Cakery</div>
                <button className="btn-order">Place Online Order</button>

                <div className="tabs">
                    <div className="tab">
                        <input type="radio" id="tab-1" name="tab-group-1" checked />
                        <label for="tab-1">Overview</label>

                        <div className="content">
                            <div className="about">About this place</div>
                            <div className="head">Cuisine</div>
                            <div className="value">Bakery, Fast-food</div>
                            <div className="head">Average Cost</div>
                            <div className="value">&#8377; 700 for two people(approx)</div>
                        </div>
                    </div>

                    <div className="tab">
                        <input type="radio" id="tab-2" name="tab-group-1" />
                        <label for="tab-2">Contact</label>

                        <div className="content">
                            <div className="head">Phone Number</div>
                            <div className="value">+9111004725435</div>
                            <div className="head">The Big Chill Cakery</div>
                            <div className="value">Shop 1, Plot D, Samruddhi Complex, Chincholi,
                        Mumbai-400002, Maharashtra</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;