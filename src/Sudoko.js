import React, {Component} from "react";
import SudokuBoard from './SudokoBoard';

export default class Sudoko extends Component{
    constructor(){
        super();
        this.state={
            position:0,
            board: [
                [5,3,0,0,7,0,0,0,0],
                [6,0,0,1,9,5,0,0,0],
                [0,9,8,0,0,0,0,6,0],
                [8,0,0,0,6,0,0,0,3],
                [4,0,0,8,0,3,0,0,1],
                [7,0,0,0,2,0,0,0,6],
                [0,6,0,0,0,0,2,8,0],
                [0,0,0,4,1,9,0,0,5],
                [0,0,0,0,8,0,0,7,9]
                // [3, 0, 6, 5, 0, 8, 4, 0, 0], 
                // [5, 2, 0, 0, 0, 0, 0, 0, 0], 
                // [0, 8, 7, 0, 0, 0, 0, 3, 1], 
                // [0, 0, 3, 0, 1, 0, 0, 8, 0], 
                // [9, 0, 0, 8, 6, 3, 0, 0, 5], 
                // [0, 5, 0, 0, 9, 0, 6, 0, 0], 
                // [1, 3, 0, 0, 0, 0, 2, 5, 0], 
                // [0, 0, 0, 0, 0, 0, 0, 7, 4], 
                // [0, 0, 5, 2, 0, 6, 3, 0, 0] 
            ]
        };
        console.log("board" +this.state.board);
        this.changeBoard = this.changeBoard.bind(this);
    }
    find_match(){
        let row=-1;
        let col=-1;
        let b=this.state.board;
        let isFind=false;
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if(b[i][j]===" "){
                    row=i;
                    col=j;
                    isFind=true;
                    break;
                }
            }
            if(isFind){
                break;
            }
        }

        return [row,col];
    }
    isValid(num,find){
        let row=find[0];//For row index
        let col=find[1];//For column index
        let b=this.state.board;
        //check row
        for(let j=0; j<9; j++)
            if(b[row][j]==num && col!=j)
                return false;

        //check columm
        for(let i=0;i<9;i++)
            if(b[i][col]==num && row!=i)
                return false;

        //check current grid
        let r=Math.floor(row/3);//Math floor to get integer value for index
        let c=Math.floor(col/3);
        for(let i=r*3;i<(r*3)+3;i++){
            for(let j=c*3;j<(c*3)+3;j++){
                if(b[i][j]==num && i!=row && j!=col)
                    return false;
            }
        }
        return true;
    }
    changeBoard(squareBoard){
        let sol=squareBoard;
        this.setState({
            board : sol
        });
        //find empty cell
        let find=this.find_match();
        let row=find[0];
        let col=find[1]; 

        if(row===-1 && col===-1){
            return true;
        }
        
        for(let num=1;num<10;num++){
            if(this.isValid(num,find)){
                sol[row][col]=num;

                if(this.changeBoard(sol))
                    return true;

                sol[row][col]=" ";    
            }
        }
    
        return false;
        //console.log("state"+this.state.board);
        //this.forceUpdate();
    }
    
    render(){
           return (
            <div> 
                <SudokuBoard board={this.state.board}/>
                <button onClick={()=>this.changeBoard(this.state.board)}>Solve me</button>
            </div>
        );
    }

    componentDidMount(){
        this.myInterval =setInterval(()=>{
            this.setState({
                position:1
            })    
        },3000);
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }
}

