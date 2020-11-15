import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

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
    saldoTitleContent:{
      display: "flex",
      justifyContent: "center",
      flex: 1,
      alignItems: "center",
      marginTop: 20,
      marginBottom: 20,
      flexDirection: "column"
    },
    saldoTitle: {
      color: "#009EE3",
      fontFamily: "Roboto",
    },
    valorSaldo: {
      color: "#009EE3",
      fontFamily: "Roboto",
      fontSize: 30
    },
    valorSaldoCash:{
      color: "#000000",
      fontFamily: "Roboto",
      opacity: "58%"
    },
    toolbar : {
      backgroundColor: "#009EE3"
    },
    totals:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginRight: 20,
      marginLeft: 20
    },
    boxTotalLeft:{
      border: "1px solid #cccc",
      marginRight: 10,
      maxWidth: "50%",
      maxHeight: "30%",
      width: "50%",
      height: "30%",
      flexDirection: "row",
      display: "flex",
      flex: 1
    },
    boxTotalRight:{
      border: "1px solid #cccc",
      marginLeft: 10,
      maxWidth: "50%",
      width: "50%",
      maxHeight: "30%",
      height: "30%",
      flexDirection: "row",
      display: "flex",
      flex: 1
    },
    totalRightIcon:{
      display: "flex",
      flex: 1,
      justifyContent: "center",
      color: "#FF9090",
      alignSelf: "center"
    },
    totalRight:{
      display: "flex",
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
      marginTop: 15,
      marginBottom: 15,
      marginRight: 15
    },
    totalRightTitle:{
      color: "#000000",
      fontFamily: "Roboto",
      opacity: "58%",
      fontSize: 13
    },
    totalRightValue:{
      color: "#FF9090",
      fontFamily: "Roboto",
      fontSize: 17
    },
    totalLeftIcon:{
      display: "flex",
      flex: 1,
      justifyContent: "center",
      color: "#77C87F",
      alignSelf: "center"
    },
    totalLeft:{
      display: "flex",
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
      marginTop: 15,
      marginBottom: 15,
      marginRight: 15
    },
    totalLeftTitle:{
      color: "#000000",
      fontFamily: "Roboto",
      opacity: "58%",
      fontSize: 13
    },
    totalLeftValue:{
      color: "#77C87F",
      fontFamily: "Roboto",
      fontSize: 17
    },
    card: {
        border: "1px solid #cccc",
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        flexDirection: "row",
        display: "flex",
        flex: 1,
        height: 60,
        maxHeight: 60
    },
    cardValue: {
      marginRight: 10,
      maxWidth: "50%",
      maxHeight: "30%",
      width: "50%",
      height: "30%",
      flexDirection: "row",
      display: "flex",
      flex: 1,
      alignSelf: "center",
      paddingBottom: 10
    },
    cardIcon: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      color: "#77C87F",
      alignSelf: "center",
      marginTop: 10
    },
    cardDetail: {
      display: "flex",
      flex: 1,
      alignContent: "center",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    iconEdit: {
      display: "flex",
      flex: 0.2,
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center"
    },
    buttonAdd: {
      display: "flex",
      flex: 1,
      color: "#009EE3",
      marginLeft: 15,
      marginTop: 5,
      justifyContent: "flex-start"
    },
    settings: {
      display: "flex",
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center"
    },
    editOptions: {
      display: "flex",
      flex: 1,
      justifyContent: "space-between",
      marginRight: 20
    },
    settingName: {
      color: "#000000",
      fontFamily: "Roboto",
      opacity: "58%",
      fontSize: 13,
      marginRight: 5
    },
    settingIcon:{
      opacity: "58%",
      color: "black"
    },
    carousel:{
      margin: 5,
      justifyContent: "center",
      display: "flex",
      flex: 1
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
  .fqkuix {
    font-size: 1em !important;
  }
`