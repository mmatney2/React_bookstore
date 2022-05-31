import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';
import BasicSwitches from './components/BasicSwitches'
import {getUser} from './api/login';
import { CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
import {postUser} from './api/register';
import CatForm from './forms/CatForm';
import ItemForm from './forms/ItemForm';
import apiCategory from './api/apiCategory';
import apiItem from './api/apiItem';
// import {putUser} from './forms/EditProfileForm';
// import {delUser} from './forms/DelUserForm';
// import {getBook} from './forms/EditProfileForm';
// import {postUser} from './forms/RegisterForm';





const my_token="4djEE-SXm2wX_m__oCmqeR_rvF9oeRixRfe3tnZ0TKw"

const handleAPITest= async ()=>{
  const my_token="4djEE-SXm2wX_m__oCmqeR_rvF9oeRixRfe3tnZ0TKw"
  // const data ={"email" : "marq@mat.com",
  // "first_name" : "Marquita",
  // "last_name" : "Matney",
  // "password" : "123"}
  const source = CancelToken.source();
  const response_object= await getUser(my_token, source.token);
  console.log(response_object)
}

function App() {
  return (
      <NavBar>
        <Button color="success" onClick={handleAPITest}>Test API Call</Button>
        <Error style={{backgroundColor:'cornflowerblue'}}>This is an error Message</Error>
        <BasicSwitches></BasicSwitches>
        {/* <LoginForm/>
        <RegisterForm/>
        <EditProfileForm/>
        <DelUserForm/>
        <ItemForm/>
        <CatForm/> */}
      </NavBar>
  );
}

export default App;
