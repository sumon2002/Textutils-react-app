// import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({

    //     // color: 'white',
    //     // backgroundColor: 'black'
    // })
    // const [btnText,setBtnText]=useState("Enable Light Mode")
    // const toggleStyle = () => {
    // if (props.mode === 'light') {
    //     // setMyStyle({
    //         document.style.color= 'black',
    //         style.backgroundColor= 'white',
    //         style.border = '1px solid white'
    //     // })
    //     // setBtnText("Enable Dark Mode")
    // }
    // else {
    //     // setMyStyle({
    //         style.color='white',
    //         style.backgroundColor= 'black'
    //     // })
    //     // setBtnText("Enable Light Mode")
    // }
    // }
    return (
        <div className='container' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>What is TextUtils?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}  >
                            Our website can help you to count characters or words present in the text given by you.you are thinking now what you have to do ,You just have to copy your text and paste the text in the text area of our website.Now if you want to count the characters or words present in the text ,you just have to take a look at the "Your Text Summary" section. Apart from counting words or characters our website can make your text to uppercase or lowercase as your wanting.You can clear the text area just clicking one button.You can remove extra spaces from your text using our website.There is also a Preview section where you can get a rough idea about the time taken by user to read the text supplied by you! <strong>DO NOT FORGET TO BOOKMARK OUR WEBSITE:D</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }} >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }} >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} className="btn btn-primary" type='button'>{btnText}</button>
            </div> */}
        </div>
    )
}
