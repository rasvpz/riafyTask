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

{
  searchData &&

<div className='tdDiv table-responsive'>
      <h5>Tech mahindra Ltd</h5>  
    {searchData.map((data,index)=>{
      return <table key={data._id} className="table table-striped table-hover table-responsive">
        <tbody> 

          <tr>
          <td width="5%"><strong> S.NO </strong></td>
          <td width="15%" className='tbFont'>{index+1}</td>
          <td width="5%"><strong> ROE </strong></td>
          <td width="15%" className='tbFont'>{data.ROEPreviousAnnum}</td>
          <td width="5%"><strong> ROCE </strong></td>
          <td width="15%" className='tbFont'>{data.ROCE}</td> 
          </tr>

          <tr>
          <td width="5%"><strong> Name </strong></td>
          <td width="15%" className='tbFont'>{data.Name}</td>
          <td width="5%"><strong> EPS </strong></td>
          <td width="15%" className='tbFont'>{data.Reserves}</td>
          <td width="5%"><strong> RESERVE </strong></td>
          <td width="15%" className='tbFont'>{data.Debt}</td> 
          </tr>

          <tr>
          <td width="5%"><strong> DEBT</strong></td>
          <td width="15%" className='tbFont'>{data.DebtToEquity}</td>
          <td width="5%"><strong> EQUITY </strong></td>
          <td width="15%" className='tbFont'>{data.EPS}</td>
          <td width="5%"></td>
          <td width="15%"></td>
          </tr>
          
          </tbody>
          </table>
      })
              
    }


</div>
      
      }
      </Container>
  </div>
  );
}

export default SearchResults;