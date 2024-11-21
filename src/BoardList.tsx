import {Component} from "react";
import {Table} from "react-bootstrap";

class BoardList extends Component{
    render(){
        return(
            <>
            <h1 className="my-5">List</h1>
<Table striped bordered hover>
    <colgroup>
    <col style={{"width":"10%"}}/>
    <col style={{"width":"70%"}}/>
    <col style={{"width":"10%"}}/>
    <col style={{"width":"10%"}}/>
    </colgroup>
    <thead>
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
        </tr>
    </thead>
</Table>
</>
        );
    }
}
export default BoardList;