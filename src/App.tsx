import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TabsMenu from './components/TabsMenu/TabsMenu';
import { IUserActionTypes } from './types/types';

function App() {
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type: IUserActionTypes.GET_USERS})
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  return (
    <div className="App">
      <TabsMenu/>
    </div>
  );
}

export default App;
