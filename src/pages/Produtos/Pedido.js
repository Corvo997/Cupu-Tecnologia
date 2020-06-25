import React from 'react';
import './produto.css';
import {
    ListGroup, ListGroupItem, ListGroupItemText,Card, Table, Button,
} from 'reactstrap';

class Pedido extends React.Component {
  
    adicionaLinha = (id) => {     
        var tabela = document.getElementById("tabelaPedido");
        var numeroLinhas = tabela.rows.length;
        var linha = tabela.insertRow(numeroLinhas);
        var celula1 = linha.insertCell(0);
        var celula2 = linha.insertCell(1);
        var x =   document.getElementsByClassName("list-group-item-text");
        celula1.innerHTML =  x[id].innerHTML;
        celula2.innerHTML =  "<input type = 'text' id = 'quantidade'></input>";       
    }

     
   
    render(){
    return (
    <div>
        <Child evento = {this.adicionaLinha}/>
    </div>
  );
}
}

class Child extends React.Component{
    render(){
        return(
            <div>
              <h1 id = "title">Produtos</h1>
        
        <Card id = "cardlista1">
          <h2 id = "title2">Hambúguers</h2>
           <ul id = "lista1">
             <ListGroup id = "grupo">
                 <ListGroupItem id = "opcao" onClick = {()=>this.props.evento(0)}>
                  <ListGroupItemText id = "prod">X-Burguer</ListGroupItemText>
                  <p id = "secprod">Pão,Patata Palha,Carne,Ovo</p>
                  <p id = "preco">5.00</p>
                 </ListGroupItem>
                 <ListGroupItem id = "opcao" onClick = {()=>this.props.evento(1)}>
                  <ListGroupItemText id = "prod">X-Salada</ListGroupItemText>
                 <p id = "secprod">Pão,Salada,Carne,Ovo,Bacon</p>
                 <p id = "preco">7.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao" onClick = {()=>this.props.evento(2)}>
                 <ListGroupItemText id = "prod">X-Calabresa</ListGroupItemText>
                 <p id = "secprod">Pão,Ovo,Calabresa,Batata-Palha,Carne</p>
                 <p id = "preco">7.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao" onClick = {()=>this.props.evento(3)}>
                 <ListGroupItemText id = "prod">Bauru</ListGroupItemText>
                 <p id = "secprod">Pão de Forma,Ovo,Bacon,Calabresa</p>
                 <p id = "preco">6.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao" onClick = {()=>this.props.evento(4)}>
                 <ListGroupItemText id = "prod">X-Americano</ListGroupItemText>
                 <p id = "secprod">Pão de Forma, Salada,Carne,Calabresa</p>
                 <p id = "preco">6.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao" onClick = {()=>this.props.evento(5)}>
                 <ListGroupItemText id = "prod">X-Tudo</ListGroupItemText>
                 <p id = "secprod">Pão,Salada,Carne,Calabresa,Batata-Palha,Ovo,Bacon</p>
                 <p id = "preco">10.00</p>
             </ListGroupItem>
         </ListGroup>        
        </ul>
        </Card>

        <Card id = "cardlista2">
        <h2 id = "title3">Bebidas</h2>
        <ul id = "lista2">
         <ListGroup id = "grupo">
             <ListGroupItem id = "opcao1" onClick = {()=>this.props.evento(6)}>
                 <ListGroupItemText id = "option" >Coca Cola 2l</ListGroupItemText>
                 <p id = "preco1">8.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao1" onClick = {()=>this.props.evento(7)}>
                 <ListGroupItemText id = "option">Fanta Uva 1l</ListGroupItemText>
                 <p id = "preco1">5.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao1" onClick = {()=>this.props.evento(8)}>
                 <ListGroupItemText id = "option">Pepsi Lata</ListGroupItemText>
                 <p id = "preco1">4.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao1" onClick = {()=>this.props.evento(9)}>
                 <ListGroupItemText id = "option">Heineken</ListGroupItemText>
                 <p id = "preco1">6.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao1" onClick = {()=>this.props.evento(10)}>
                 <ListGroupItemText id = "option">Skol</ListGroupItemText>
                 <p id = "preco1">5.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao1" onClick = {()=>this.props.evento(11)}>
                 <ListGroupItemText id = "option">Água</ListGroupItemText>
                 <p id = "preco1">2.00</p>
             </ListGroupItem>
         </ListGroup>
        </ul>
        </Card>

        <Card id = "cardlista3">
        <h2 id = "title4">Sobremesas</h2>
        <ul id = "lista3">
         <ListGroup id = "grupo">
             <ListGroupItem id = "opcao1" onClick = {()=>this.props.evento(12)}>
                 <ListGroupItemText id = "option">Bolo</ListGroupItemText>
                 <p id = "preco1">3.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao1" onClick = {()=>this.props.evento(13)}>
                 <ListGroupItemText id = "option">Torta</ListGroupItemText>
                 <p id = "preco1">3.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao1" onClick = {()=>this.props.evento(14)}>
                 <ListGroupItemText id = "option">Salgado</ListGroupItemText>
                 <p id = "preco1">2.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao1" onClick = {()=>this.props.evento(15)}>
                 <ListGroupItemText id = "option">Batata-Frita</ListGroupItemText>
                 <p id = "preco1">4.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao1" onClick = {()=>this.props.evento(16)}>
                 <ListGroupItemText id = "option">Sorvete</ListGroupItemText>
                 <p id = "preco1">3.00</p>
             </ListGroupItem>
             <ListGroupItem id = "opcao1" onClick = {()=>this.props.evento(17)}>
                 <ListGroupItemText id = "option">Doce</ListGroupItemText>
                 <p id = "preco1">3.00</p>
             </ListGroupItem>
         </ListGroup>
        </ul>
        </Card>
          
        <Card id = "pedido">
            <h1 id = "t1">Pedido</h1>
         <div id = "tt">
            <Table id = "tabelaPedido">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Qtd</th>
                    </tr>
                </thead>
            </Table>
        </div>
            
        </Card>
    <Button id = "salvar" href = "/" >Salvar</Button>
    <Button id = "cancelar2" href = "/">Cancelar</Button>
            </div>
        )
    }
}

export default Pedido;
