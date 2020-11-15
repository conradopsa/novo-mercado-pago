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
      display: "flex",
      flex: 1,
      backgroundColor: "#009EE3",
      marginRight: 20,
      marginLeft: 20,
      marginTop: 10,
      marginBottom: 10,
      height: 120,
      maxHeight: 120,
      borderRadius: 5,
      flexDirection: "column"
    },
    cardTitle:{
      color: "#FFFF",
      fontFamily: "Roboto",
      fontSize: 15,
      flex: 1,
      display: "flex",
      paddingLeft: 20,
      paddingTop: 10
    },
    cardDescription:{
      color: "#FFFF",
      fontFamily: "Roboto",
      fontSize: 12,
      flex: 1,
      display: "flex",
      paddingLeft: 20,
      paddingTop: 2,
      opacity: "70%"
    },
    totalCard: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      paddingLeft: 10,
      paddingRight: 25,
      justifyContent: "space-between",
    },
    cardTotalLeft:{
      paddingRight: 5,
      maxWidth: "40%",
      width: "40%",
      flexDirection: "row",
      display: "flex",
      flex: 1,
    },
    cardTotalRight:{
      paddingLeft: 5,
      maxWidth: "40%",
      width: "40%",
      flexDirection: "row",
      display: "flex",
      flex: 1
    },
    cardMoneyValue: {
      color: "#FFFF",
      fontFamily: "Roboto",
      fontSize: 20,
    },
    cardCashValue: {
      color: "black",
      fontFamily: "Roboto",
      fontSize: 12
    },
    cardLeft:{
      display: "flex",
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
      paddingTop: 5,
      paddingRight: 5
    },
    cardRight:{
      display: "flex",
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
      paddingTop: 5
    },
    cardFooter:{
      display: "flex",
      flex: 1,
      justifyContent: "flex-end",
      flexDirection: "row",
      padding: 5
    },
    cardTypeName:{
      display: "flex",
      flex: 1,
      color: "#FFFF",
      fontFamily: "Roboto",
      fontSize: 12,
    },
    totalCardMoviment:{
      display: "flex",
      flex: 1,
      flexDirection: "row",
      paddingLeft: 10,
      paddingRight: 25,
      justifyContent: "flex-start",
    },
    cardTotalLeftMoviment:{
      maxWidth: "90%",
      width: "90%",
      flexDirection: "row",
      display: "flex",
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      alignContent: "center"
    },
    totalIconMoviment:{
      display: "flex",
      justifyContent: "center",
      color: "#77C87F",
      alignSelf: "center"
    },
    valueFutureBox: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    cardValueNow: {
      display: "flex",
      flex: 1,
      color: "#FFFF",
      fontFamily: "Roboto",
      fontSize: 15,
      justifyContent: "center"

    },
    cardValueFuture: {
      display: "flex",
      flex: 1,
      color: "#FFFF",
      fontFamily: "Roboto",
      fontSize: 15,
      justifyContent: "center"
    },
    totalIconMovimentOff:{
      display: "flex",
      justifyContent: "center",
      color: "#FF9090",
      alignSelf: "center"
    },
}));

export default useStyles;