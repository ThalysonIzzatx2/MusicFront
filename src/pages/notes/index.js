import React, { Component } from 'react';
import api from '../../services/api';
import { MdChevronRight, MdSettings } from 'react-icons/md'
import { withRouter } from 'react-router-dom';

import loading from '../../assets/loading.gif';
import './style.css';




// import { Container } from './styles';

export default class notes extends Component {
  state = {
    search: '',
    url:'',
    title:'',
    artist:'',
    press:false,
    controls:false

  }
  play = async () => {
    this.setState({search:''})
    this.setState({url:''})
    this.setState({press:true})
    const response = await api.get(`/${this.state.search}`);
    const data = response.data.resposta
    console.log(response.data.resposta)
    data.map(d => {
      if (d.rota !== undefined)
        this.setState({url:"https://thalysonfy-back.herokuapp.com/"+d.rota})
      if (d.title !== undefined && d.artist !== undefined)
        this.setState({title:d.title, artist:d.artist})
    })
    
    this.setState({press:false})
  }
  setControls = () => {
    let controls = !this.state.controls
    this.setState({controls})
  }

  render() {

    //const { user } = this.props.location.state;


    return (
      <div class="main-div">

        <div class="input-g">
          <input type='text' name="pesquisar" placeholder="Digite o nome da musica..." value={this.state.search} onChange={search => this.setState({search:search.target.value})}/>
          <div className="cc">
            { !!this.state.url && 
              <button id="set" type="button"  onClick={this.setControls}>
                <MdSettings size={40} color="#0652DD"/>
              </button>
            }
            <button type="button"  onClick={this.play}>
              <MdChevronRight size={60} color="#0652DD"/>
            </button>
          </div>
        </div>
        <div class="play">    
          {this.state.press &&

            <img class='img' src={loading} alt="Logo" />

          }

          { !this.state.url && !this.state.press && 
            <>
            <span class='message'>Após digitar a musica aguarde 15 segundos :D ...</span>
            </>
          }
          { !!this.state.url && 
         
          <div class="play-music">
            <h3 class='name'>{this.state.title} - {this.state.artist}</h3>
            <audio controls={this.state.controls} preload="auto" autoPlay={true}>
              <source src={this.state.url} type='audio/mpeg' />
              Your browser does not support the audio element.
            </audio>           
          </div>
          }
        </div>
      </div>
    );
  }
}


const ProfilewithRoute = withRouter(notes);
