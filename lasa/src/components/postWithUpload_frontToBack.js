
import React from 'react';
import './postWithUpload_frontToBack.css'
class PostFrontToBack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     titre: '',
     description:'',
      date:'',
      debut:'',
      dure:'',
      place_dispo:'',
      place_reserve:'',
      prix:'',
     image:''

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }




  onChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}


  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('image', this.uploadInput.files[0]);
    data.append('titre',this.state.titre);
    data.append('description',this.state.description);
    data.append('date',this.state.date);
    data.append('debut',this.state.debut);
    data.append('dure',this.state.dure);
    data.append('place_dispo',this.state.place_dispo);
    data.append('place_reserve',this.state.place_reserve);
    data.append('prix',this.state.prix);
    fetch('http://localhost:8080/register/'+localStorage.getItem('id'), {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ image: `http://localhost:8080/register/${body.image}` });
        console.log('ity ilay body.fil',body.image);
       
      });
    });
    this.setState({
      titre: '',
      description:'',
       date:'',
       debut:'',
       dure:'',
       place_dispo:'',
      place_reserve:'',
      prix:'',
       image:''
    })
    
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage } className="formulaireAtelier"
       
      >
        <h2 id="legende">Completez les formulaire ci-dessous</h2>
        <label>titre:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="titre" /><br></br>
          <label>Description:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="description" /><br/>
        <label>date:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="date" /><br/> 
          <label>Debut:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="debut" /><br/>
          <label>Durée:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="dure" /><br/>   
          <label>Nombre de place disponible:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="place_dispo" /><br/> 
          <label>Nombre de place reservée:</label>
        <input type="text"
          value={this.state.value }
          onChange={this.onChange}
          name="place_reserve" /><br/>   
          <label>Prix:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="prix" />   <br/>  
      
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" id="buttonUpload"
           /> <br/>
       
          <input type="submit" class="fadeIn fourth" value="Ajouter" id="bouttonAjouter" value="Envoyer"/><br/>
          
      </form>
    );
  }
}

export default PostFrontToBack;
