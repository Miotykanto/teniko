
import React, { Component } from 'react';
import axios from 'axios';
import './chacun.css'

export default class Chacun extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080'+this.props.location.pathname)
            .then(response => {
                console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

        

    }

    liste() {
        return <div>
            <div class="row">
                
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return (
<div class="col-md-2 carde">
<div class="card">




<div  id="bordueCard" class="card-body">

  
  <h4 id="cart1" class="card-title">{obj.titre}</h4>
  <img width="120px" height="120px" src={'http://localhost:8080/user/'+obj.image} alt="pdp" />
  <p id="cart" class="card-text">{obj.description}</p>
  <p id="cart" class="card-text">{obj.date}</p>
  <p id="cart" class="card-text">{obj.debut}</p>
  <p id="cart" class="card-text">{obj.dure}</p>
  <p id="cart" class="card-text">{obj.place_dispo}</p>
  <p id="cart" class="card-text">{obj.place_reserve}</p>
  <p id="cart" class="card-text">{obj.prix}</p>
  {/* <a type="button" class="btn btn-outline-primary" to='/inscrire'>  S'inscrire </a> */}
  <button type="button" class="btn btn-outline-primary" to='/inscrire'>S'inscrire</button>

</div>
</div>
</div>)

                            })) : ('')
                        }
                
        </div>
        </div>
    }
    render() {
        return (
            <div >
                {this.liste()}
            </div>
        );
    }
}