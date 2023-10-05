import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Loader from './common/Loder/Loader';
import './assets/css/style.css'
import { RootState } from './redux/store';
import { connect } from 'react-redux';
import { loading } from './redux/Loder/loader.action';
import AppRouter from './routes';
function App(props:any) {
  useEffect(() => {
    props.loading(true);
 setTimeout(() => {
  props.loading(false);
 }, 2000);
  }, [])
  

  return (
    <div className="App">
   
        <>
        <Loader loading={props.loaderReducer.loading} />
        <AppRouter />
        </>
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return { loaderReducer: state.loaderReducer };
};

const mapDispatchToProps =  {
  loading
 };
export default connect(mapStateToProps, mapDispatchToProps)(App);
