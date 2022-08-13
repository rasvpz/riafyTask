import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './SearchResults.css';
import {useDispatch, useSelector} from 'react-redux'
import { SearchCompanyAction } from '../../Action/SearchAction';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineSearch } from "react-icons/ai";

function SearchResults() {

const {searchData} = useSelector(state=>{
  return state.SearchCompany
})
  const dispatch = useDispatch()
  const handleSearch = async(e) => {
    dispatch(SearchCompanyAction(e.target.value))
  }
  return (
    <div className="container tblContainer">
      <Container className='bdBg'>
    <Form.Label htmlFor="inputPassword5">
    <h2>The esiest way to buy <br /> and sell stocks <br /><br /></h2>
    </Form.Label>
    

<InputGroup className="mb-3 search">
        <InputGroup.Text id="basic-addon1">
       <AiOutlineSearch />
        </InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          onChange={handleSearch}
          aria-describedby="basic-addon1"
        />
      </InputGroup>

{searchData &&<div className='tdDiv table-responsive'>
<h4>Tech mahindra Ltd</h4><br />
      <table className="table table-striped table-hover table-responsive">
      
        <tr>
          <th>S.NO</th>
          <th>NAME</th>
          <th>ROCE</th>
          <th>ROE</th>
          <th>EQUITY</th>
          <th>EPS</th>
          <th>RESERVES</th>
          <th>DEBT</th>
          </tr>
<tbody>   
 {searchData.map((data,index)=>{
  return<tr key={data._id}>
  <td className='tbFont'>{index+1}</td>
          <td>{data.Name}</td>
          <td>{data.ROCE}</td>
          <td>{data.ROEPreviousAnnum}</td>
          <td>{data.DebtToEquity}</td>
          <td>{data.EPS}</td>
          <td>{data.Reserves}</td>
          <td>{data.Debt}</td>
          </tr>
        })
        }
        </tbody>
      </table>
      </div>}
      </Container>
      </div>
  );
}

export default SearchResults;