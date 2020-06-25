import React from 'react';
import {Card, CardBody, Table, CardTitle, Button} from 'reactstrap';
import './style.css';

function Main(props){
    function removeTabela(){
      var i;
      for(i = 6 ; i >=1 ; i--){
        document.getElementById('primeiro').deleteRow(i);
      }    
      document.getElementById('result').value="";
    }
    
  function Finalizado(){
    alert("Pedido Finalizado");
    var i;
      for(i = 6 ; i >=1 ; i--){
        document.getElementById('primeiro').deleteRow(i);
      } 
      document.getElementById('result').value=""; 
  }
  

  return(
      <div>
          <Card id = "cartao">
            <CardBody> 
            <CardTitle id = "t1">Primeiro Pedido</CardTitle>
            <Table id = "primeiro">
      <thead>
        <tr>      
          <th>Produto</th>
          <th>Qtd</th>
          <th>SubTotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>X-Burguer</td>
          <td>2</td>
          <td>10.00</td>
        </tr>

        <tr>
          <td>X-Salada</td>
          <td>1</td>
          <td>7.00</td>
        </tr>

        <tr>
          <td>Coca-Cola 2l</td>
          <td>1</td>
          <td>8.00</td>
        </tr>

        <tr>
          <td>Bolo</td>
          <td>3</td>
          <td>9.00</td>
        </tr>

        <tr>
          <td>Sorvete</td>
          <td>2</td>
          <td>6.00</td>
        </tr>

        <tr>
          <td>Água</td>
          <td>2</td>
          <td>4.00</td>
        </tr>
      </tbody>
    </Table>
            </CardBody>
          </Card>
          <label id = "total">Total:</label>
    <input type = "text" id = "result" disabled value = "44.00"></input>
          <p id = "t2">Lista de Pedidos</p> 
         
 
          <Button id = "finalizar" onClick = {Finalizado}>Finalizar Pedido</Button>{' '}
          <Button id = "adicionar"href = "/produtos">Adicionar Pedido</Button>{' '}
          <Button id = "cancelar" onClick = {removeTabela}>Cancelar Pedido</Button>{' '}
          
      </div>
    );
}

export default Main;