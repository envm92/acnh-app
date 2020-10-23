import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Villagers } from '../features/villagers/Villagers';
import { fetchListAsync } from '../features/villagers/villagers.slice';

class App extends React.Component {

  constructor(props: any) {
    super(props);
    props.fetchList();
  }

  render (){
    return (
      <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            ACNH - App
          </Typography>
        </Toolbar>
          </AppBar>
        <header className="App-header">
          <Villagers/>
        </header>
      </div>
    );
  };
}

const mapStateToProps = (state: any) => {
  return {
      villagers: state.villagers,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return {
      fetchList: () => dispatch(fetchListAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);