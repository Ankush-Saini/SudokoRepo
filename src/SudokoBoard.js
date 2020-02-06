import React, {Component} from "react";
import Cell from './Cell';

class SudokuBoard extends Component{
    constructor(props){
        super(props);
        this.state={
            isReadable:true
        };
        console.log("SudokuBoard");
        this.createTable = this.createTable.bind(this);
    }
    createTable(){
        let table=[];   
        let cells=[];
        cells=this.props.board;
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if(cells[i][j]==0)
                    cells[i][j]=' ';
            }
        }
        for(let i=0;i<9;i++){
            let children=[];
            for(let j=0;j<9;j++){
                    children.push(
                        <td><Cell value={cells[i][j]}/></td>
                    );
                //children.push(<td>{child}</td>);
            }
            table.push(<tr>{children}</tr>);
        }
        return table; 
    }
  
    render(){
        return (
            <div>
             <h1>Sudoku's Game</h1>
            <hr/>
            <table>
                {this.createTable()}
            </table>
            </div>
        );
    }
}

export default SudokuBoard;