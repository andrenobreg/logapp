import React from 'react';
import Cardnota from './cardnota.js';
import Database from './database.js';
import logo from './img/logo.png';
import enviar from './img/enviar.png';
import mic from './img/mic.png';
class Home extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
            height: "calc(100vh - 250px)",
            basenotas: Database().basenotas,
            value: "",
			rows: 2,
			minRows: 2,
			maxRows: 10,
            imagem: mic,            
		};
	}

	handleChange = (event) => {
		const textareaLineHeight = 24;
		const { minRows, maxRows } = this.state;
		
		const previousRows = event.target.rows;
  	event.target.rows = minRows; // reset number of rows in textarea 
		
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    
    if (currentRows === previousRows) {
    	event.target.rows = currentRows;
    }
		
		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
		}
    
  	this.setState({
    	value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
    /*if(this.state.rows==2){
        this.setState({height: "calc(100vh - 160px)"})
    }else{
        if(this.state.rows==3){
            this.setState({height: "calc(100vh - 184px)"})
        }else{
            if(this.state.rows==4){
                this.setState({height: "calc(100vh - 196px)"})
            }
        }
    }*/
	};

    inserirNota(){
        let i = this.state.basenotas.length;
        i = i+1;
        this.state.basenotas[i] = this.state.value;
        this.setState({value: ''});
        this.updateScroll()
      }

    updateScroll(){
        var element = document.getElementById("board");
        element.scrollTop = element.scrollHeight;
    }

	render() {

        function filterFunction() {
            var input, filter, a, i, txtValue;
            input = document.getElementById("entradabusca");
            filter = input.value.toUpperCase();
            a = document.getElementsByClassName("resultados");
            for (i = 0; i < a.length; i++) {
              txtValue = a[i].textContent || a[i].innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
              } else {
                a[i].style.display = "none";
              }
            }
        }

		return (
			<div>
            <html>
                <body>
                <div style={{boxShadow: "5px 5px 10px black", width:"100%", height:"50px", backgroundColor:"red", position:"relative"}}>
                    <img src={logo} style={{float:"left", padding:"6px"}}/>
                    <input type="text"  placeholder="Pesquisa..."  id="entradabusca" onKeyUp={filterFunction} style={{paddingLeft:"5px", height:"30px", width:"50vw", float:"right", marginTop:"9px", marginRight:"10px", boxShadow: "2px 2px 2px black", boxSizing:"border-box", border:"none", borderRadius:"3px", resize:"none", fontSize:"20px", outline:"0"}}/>
                </div>
                        <div id="board" style={{boxShadow: "inset 0px 0px 8px black", scrollBehavior:"smooth", display:"flex", flexDirection:"column", backgroundColor:"#eed1d1", position:"relative", height:this.state.height, overflow:"auto", paddingBottom:"10px"}}>
                        {this.state.basenotas.map((nota) => (<a className="resultados">{Cardnota(nota)}</a>) )}
                        </div>
                        <div style={{whiteSpace:"pre-wrap", boxSizing:"border-box", display: "flex", width:"100%", maxHeight:"200px", backgroundColor:"red", position:"absolute", bottom:"0", paddingTop:"18px", paddingBottom:"18px", paddingLeft:"2vw", paddingRight:"2vw"}}>
                        <textarea
                        style={{boxShadow: "2px 2px 2px black", boxSizing:"border-box", border:"none", borderRadius:"3px", resize:"none", fontSize:"20px", lineHeight:"24px", overflow:"auto", height:"auto", padding:"8px", outline:"0", float:"left", marginLeft:"0px", marginTop:"0px", marginBottom:"0px", width:"74vw", maxHeight:"100px"}}
                        rows={this.state.rows}
                        value={this.state.value}
                        placeholder={'Log...'}
                        className={'textarea'}
                        onChange={this.handleChange}
                        //onKeyUp={this.handleChange}
                        />
                        <div>
                            <div onClick={(event) => {this.inserirNota()}} style={{display: "flex", position:"relative", justifyContent:"center", alignItems:"center", cursor:"pointer", boxShadow: "2px 2px 2px black", backgroundColor:"white", width:"20vw", maxHeight:"100px", minHeight:"64px", height:"100%", outline:"0", border:"0", borderRadius:"3px", float:"left", marginLeft:"2vw"}}>
                                <img src={enviar} style={{margin:"15px"}}/>
                            </div>
                        </div>
                        </div>
                </body>
            </html>
        </div>
		);
	}
}

export default Home;