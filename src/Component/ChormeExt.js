import React from 'react'
import './ChromeExt.css'
import cors from './image/cors.jpg'

function ChormeExt() {
    return (
        <>
            <div id="chrome">
                <br /><br /><br /><br /><br /><br />

                <h3 id="chrome-h3">Welcome Dear User</h3>
                <br /><br /><br />
                <div className="extension-div">
                    <ul>
                        <li>
                            Hey User,
                            Please download this <a id="this-ext" href="https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc">Extension</a>  to check the live updated of <span>COVID-19</span> in India.
                        </li>
                        <br /><br /><br />

                        <li>
                            Make sure to enable this extension in your chrome browser by clicking this button as shown in this image. 👍
                        </li>
                        <br />
                        <li>
                            <img src={cors} alt="" id="image-cors" />
                        </li>
                        <br /><br />
                        <li>
                            After this, Now you are all set to check the live updates of CoVID-19 Virus. Click on the Start <span>Button</span> .
                        </li>
                        <br /><br />
                        <li>
                            <button className="btn btn-warning">
                                <a href='/covid' >Start</a>

                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default ChormeExt
