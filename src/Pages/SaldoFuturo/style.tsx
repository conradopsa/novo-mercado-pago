import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "flex",
      justifyContent: "center",
      flex: 1,
      fontSize: 17
    },
    menuIcon:{
      display: "flex",
      flex: 1
    },
    toolbar : {
      backgroundColor: "#009EE3"
    },
    editOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        marginRight: 20
    },
    buttonAdd: {
        display: "flex",
        flex: 1,
        color: "#009EE3",
        marginLeft: 15,
        marginTop: 5,
        justifyContent: "flex-start"
    },
    carousel:{
        margin: 5,
        justifyContent: "center",
        display: "flex",
        flex: 1
    },
    barChart: {
    }
}));

export default useStyles;

export const StyledDiv = styled.div`
  /* square buttons */
  .rec.rec-arrow {
      border-radius: 0;
      font-size: 1em !important;
      background-color: white;
      box-shadow: 0 0 2px 0px white;
      width: 20px;
      height: 50px;
      min-width: 20px;
      line-height: 50px;
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
      border-radius: 50%;
      font-size: 1em !important;
      background-color: white;
      color: white;
      box-shadow: 0 0 2px 0px white;
      width: 20px;
      height: 50px;
      min-width: 20px;
      line-height: 50px;
  }
  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
      visibility: hidden;
  }
  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
      outline: none;
  }
`