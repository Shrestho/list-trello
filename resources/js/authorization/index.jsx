import React from 'react';
import ReactDOM from 'react-dom';

function Example() {

    const getPurchase = () => {
        const url = "https://raw.githubusercontent.com/Bit-Code-Technologies/mockapi/main/purchase.json";
        fetch(url).then(response=>{
            console.log("res:",response)
            return response.json();
        }).then(responseData=>{
            console.log("res:",responseData)
            setPurchases(responseData)
            // const previousPurchase = purchases;
            // responseData.map((data,index)=>{
            //     previousPurchase[index] = data
            //     setPurchases(previousPurchase)
        // })
        }).catch(error=>{ 
            return error.response;
        });
        // console.log("puchase res:",res);
        // return res;
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
