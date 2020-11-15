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
      flex: 2,
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
}));

export default useStyles;