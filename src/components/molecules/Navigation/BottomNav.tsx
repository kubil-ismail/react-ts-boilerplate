import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

// Use Redux
import { connect } from 'react-redux';
import { handlePage } from "src/redux/actions/general";

const useStyles = makeStyles({
  root: {
    width: "95vw",
    position: "fixed",
    bottom: 0,
    border: "1px solid #cacaca",
  },
});

function SimpleBottomNavigation(props: any) {
  let history = useHistory();
  const classes = useStyles();

  return (
    <BottomNavigation
      value={props.general.pages}
      onChange={(event, newValue) => {
        history.push(newValue);
        props.handlePage(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Recents"
        value="/"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="/favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="/nearby"
        icon={<LocationOnIcon />}
      />
    </BottomNavigation>
  );
}

const mapStateToProps = (state: any) => ({
  general: state.general,
});

const mapDispatchToProps = { handlePage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleBottomNavigation);