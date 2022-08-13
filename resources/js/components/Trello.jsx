import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Button ,Card} from 'react-bootstrap';

function Trello() {

    useEffect(() => {
        viewBoard();
        getMemberOrganizations();
        getBoardsOrganization();
        // createBoard();
        // updateBoard();
        getCardsList();
        // deleteBoard();
        getBoardList();
        // createList();
        viewCard();
        // createCard();

    }, [])

    const viewBoard= () => {
        fetch('https://api.trello.com/1/boards/62f7c327737ad1639fcd5509/lists?key=6cf992d5ffe544366e9638b27861c183&token=86fe5b5345a149dd0500a3eb4d6072fdaf7ea7c25ec8f2f426e7d894f2fe15d0',
            {headers: {
                'Accept': 'application/json'
            }
        }).then(responseData=>{
                console.log("res:",responseData)
        }).catch(error=>{ 
            return error.response;
        });
    }

    const getMemberOrganizations= () => {
        const url = "https://api.trello.com/1/members/me/organizations?key=6cf992d5ffe544366e9638b27861c183&token=86fe5b5345a149dd0500a3eb4d6072fdaf7ea7c25ec8f2f426e7d894f2fe15d0"
        fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }}).then(responseData=>{
                console.log("res:",responseData)
            }).catch(error=>{ 
                return error.response;
            });
    }

    const getBoardsOrganization= () => {
        const url = "https://List.trello.com/1/organizations/62f14ea3b2abfc87d6593b0c/boards?key=6cf992d5ffe544366e9638b27861c183&token=86fe5b5345a149dd0500a3eb4d6072fdaf7ea7c25ec8f2f426e7d894f2fe15d0"
        fetch(url).then(response=>{
            return response.json();
        }).then(responseData=>{
                console.log("res:",responseData)
            }).catch(error=>{ 
                return error.response;
            });
    }

    
    const createBoard = async() => {
        const url = "https://List.trello.com/1/boards/?name=task-two&key=6cf992d5ffe544366e9638b27861c183&token=86fe5b5345a149dd0500a3eb4d6072fdaf7ea7c25ec8f2f426e7d894f2fe15d0"
        fetch(url, {method: 'POST'}).then(response=>{
            return response.json();
        }).then(responseData=>{
            console.log("res:",responseData)
        }).catch(error=>{ 
            return error.response;
        });
    }

    const updateBoard = async() => {
        const url = "https://List.trello.com/1/boards/62f26d298642ae675cd8763c?key=6cf992d5ffe544366e9638b27861c183&token=86fe5b5345a149dd0500a3eb4d6072fdaf7ea7c25ec8f2f426e7d894f2fe15d0"
        fetch(url, {
        method: 'PUT'
        }).then(response=>{
            return response.json();
        }).then(responseData=>{
            console.log("res:",responseData)
        }).catch(error=>{ 
            return error.response;
        });
    }

    const deleteBoard = async() => {
        const url = "https://List.trello.com/1/boards/62f26d298642ae675cd8763c?key=6cf992d5ffe544366e9638b27861c183&token=86fe5b5345a149dd0500a3eb4d6072fdaf7ea7c25ec8f2f426e7d894f2fe15d0"
        fetch(url, {
        method: 'DELETE'
        }).then(response=>{
            return response.json();
        }).then(responseData=>{
            console.log("res:",responseData)
        }).catch(error=>{ 
            return error.response;
        });
    }
    
    const getBoardList = async() => {
        const url = "https://List.trello.com/1/boards/62f26d298642ae675cd8763c/lists??key=6cf992d5ffe544366e9638b27861c183&token=86fe5b5345a149dd0500a3eb4d6072fdaf7ea7c25ec8f2f426e7d894f2fe15d0"
        fetch(url).then(response=>{
            return response.json();
        }).then(responseData=>{
            console.log("res:",responseData)
        }).catch(error=>{ 
            return error.response;
        });
    }

        
    const getCardsList = async() => {
        const url = "https://List.trello.com/1/lists/62f26d298642ae675cd87643/cards?key=6cf992d5ffe544366e9638b27861c183&token=86fe5b5345a149dd0500a3eb4d6072fdaf7ea7c25ec8f2f426e7d894f2fe15d0"
        fetch(url).then(response=>{
            return response.json();
        }).then(responseData=>{
            console.log("res:",responseData)
        }).catch(error=>{ 
            return error.response;
        });
    }
    
    const createList = async() => {
        const url = "https://List.trello.com/1/lists?name=new-list&idBoard=5abbe4b7ddc1b351ef961414&key=6cf992d5ffe544366e9638b27861c183&token=86fe5b5345a149dd0500a3eb4d6072fdaf7ea7c25ec8f2f426e7d894f2fe15d0"
        fetch(url, {
        method: 'POST'
        }).then(responseData=>{
            console.log("res:",responseData)
        }).catch(error=>{ 
            return error.response;
        });
    }

        
    const viewCard = async() => {
        const url = "https://List.trello.com/1/cards/62f26d298642ae675cd8769c?key=6cf992d5ffe544366e9638b27861c183&token=86fe5b5345a149dd0500a3eb4d6072fdaf7ea7c25ec8f2f426e7d894f2fe15d0"
        fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
        }).then(response=>{
            return response.json();
        }).then(responseData=>{
            console.log("res:",responseData)
        }).catch(error=>{ 
            return error.response;
        });
    }

        
    const createCard = async() => {
        const url = "https://List.trello.com/1/cards?idList=5abbe4b7ddc1b351ef961414&?key=6cf992d5ffe544366e9638b27861c183&token=86fe5b5345a149dd0500a3eb4d6072fdaf7ea7c25ec8f2f426e7d894f2fe15d0"
        fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
        }).then(response=>{
            return response.json();
        }).then(responseData=>{
            console.log("res:",responseData)
        }).catch(error=>{ 
            return error.response;
        });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Trello List</div>

                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Board Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View Board</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trello;

if (document.getElementById('app')) {
    ReactDOM.render(<Trello />, document.getElementById('app'));
}
