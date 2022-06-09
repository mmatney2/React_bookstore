import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';
import BasicSwitches from './components/BasicSwitches'
import {getUser} from './api/apiBasicAuth';
import { CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
import {postUser} from './api/user';
import BookForm from './forms/BookForm';
import apiCategory from './api/apiUser';
import {getAllBooks} from './api/apiBook';
import {getOneBook} from './api/apiBook';
import {createUser} from './api/user';
import RegisterForm from './forms/RegisterForm';
// import DisplayAllBooksGrid from './components/DisplayAllBooksGrid'
// import AdminMenu from './components/AdminMenu'
import {putUser} from './api/apiUser';
import EditProfileForm from './forms/EditProfileForm';




// const my_token="8Qd8cU9Oi44FdJjTwY3_bkI9qwxBBhQo8jWi6je-iqw"

const handleAPITest= async ()=>{
  
  const source = CancelToken.source();
  const data = {email: "marquita.matney@gmail.com",password:"123"}
  const response_object= await putUser( data, source.token);
  console.log(response_object)
}

function App() {
  return (
      <NavBar>
        <Button color="success" onClick={handleAPITest}>Test API Call</Button>
        <Error style={{backgroundColor:'cornflowerblue'}}>This is an error Message</Error>
        <BasicSwitches></BasicSwitches>
        {/* <BookForm/> */}
        <LoginForm/>
        {/* <DisplayAllBooksGrid/>
        <AdminMenu/> */}
        {/* <RegisterForm/>
        <EditProfileForm/> */}
        {/* <EditProfileForm/>
        <DelUserForm/>
        <ItemForm/>
        <CatForm/> */}
      </NavBar>
  );
}

export default App;
