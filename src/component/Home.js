import React from 'react'
import Message from './Message';


function Home() {
   return (<Message>
        {
            (
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">At Aspire, we help SME overcome the hurdles of finding Loan. </h1>
                        <p className="lead">You can get a loan instantly. Just visit <a href="/newloan">New Loan</a></p>
                    </div>
                </div>
            )
        }
    </Message>)
}

export default Home
