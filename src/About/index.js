import React from "react";
import './style.css';

const About= () =>{
    return(
        <div className="back">
<div id="hydro">
<img src={process.env.PUBLIC_URL + '/images/hydro.jpg'} alt="Farm" />
</div>

<div>
    <h1 id="about">About Us</h1>
</div >

<div className="mission">
    <div className="emoji-line">
        <p id="love">💚 </p><p id="mission">“Our mission <span id="vision">is to make nutritious and healthy food easily accessible to everyone, without compromising on fair prices.”</span></p>
    </div>
    <div className="emoji-line">
        <p id="food">🍲 </p><p id="mission">"Our Vision <span id="vision">is to increase food productivity in informal settlements in urban areas to fight food insecurity.”
        </span></p>
    </div>
</div>

<div className="rose-f">
<img src={process.env.PUBLIC_URL + '/images/rose-feeding.jpeg'} alt="Farm" />
</div>


<div id="why">
    <div id="veges">
        <img src={process.env.PUBLIC_URL + '/images/veges.jpg'} alt="Veges" />
    </div>
    <h1>Why Choose Us</h1>
    <p>Through our innovative approach, we're transforming the way people access food, ensuring that affordability doesn't come 
        at the expense of quality. With UrbanVerde, you can enjoy the convenience of accessible and wholesome food options that nourish both your body and your budget.</p>
</div>


        </div>



    )
}

export default About;