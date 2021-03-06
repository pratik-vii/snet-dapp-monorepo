import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  Modal: { overflow: "auto" },
  card: {
    width: 720,
    paddingBottom: 40,
    margin: "0px auto 80px	",
    transform: "translateY(25%)",
    "@media(max-width:800px)": {
      width: "auto",
      margin: "0 25px",
    },
  },
  CardHeader: {
    padding: "0 22px",
    "& span": {
      color: MUITheme.palette.text.darkGrey,
      fontSize: 20,
      fontWeight: 400,
      lineHeight: "50px",
    },
  },
  CardContent: { padding: 0 },
  sessionDetails: {
    padding: "16px 22px",
    display: "flex",
    background: MUITheme.palette.background.mainContent,
    "& > p": {
      fontSize: 16,
      lineHeight: "20px",
      "&:first-of-type": { color: MUITheme.palette.text.primary },
      "&:last-of-type": { color: MUITheme.palette.text.darkGrey },
    },
  },
  addStakeTextfieldSection: {
    paddingBottom: 23,
    borderBottom: "1px solid #e2e2e2",
    margin: "35px 23px 23px 21px",
    display: "flex",
    alignItems: "flex-start",
    "& > div": {
      width: 302,
      "& > div": {
        maxWidth: "100%",
        flexBasis: "100%",
        "& .MuiTextField-root": { margin: 0 },
      },
    },
    "& img": {
      width: 35,
      padding: "15px 25px 0",
      [MUITheme.breakpoints.down("xs")]: { padding: "15px 10px 0" },
      "@media(max-width: 480px)": { display: "none" },
    },
    "& .MuiInputAdornment-root": {
      "& p": {
        color: MUITheme.palette.text.primary,
        fontSize: 16,
        lineHeight: "20px",
        textTransform: "uppercase",
      },
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": { transform: "translate(14px, -6px) scale(0.90)" },
    "@media(max-width: 480px)": { flexDirection: "column" },
  },
  stakeAmtDetailsContainer: {
    padding: "0 23px 0 20px",
    display: "flex",
    flexWrap: "wrap",
    "& > div": {
      "&:nth-child(3n)": {
        paddingLeft: 32,
        "@media(max-width:800px)": { paddingLeft: 0 },
      },
    },
    "@media(max-width:800px)": { flexDirection: "column" },
  },
  stakeAmtDetail: {
    width: 317,
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
  },
  iconTitleContainer: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: 10,
      color: MUITheme.palette.text.disabled,
      fontSize: 21,
    },
  },
  title: {
    width: 121,
    color: MUITheme.palette.text.lightGrey,
    fontSize: 16,
    lineHeight: "20px",
  },
  value: {
    boxSizing: "border-box",
    maxWidth: 181,
    width: "100%",
    padding: "14px 0",
    border: "1px solid #E2E2E2",
    borderRadius: 4,
    marginLeft: 16,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
    "& p": {
      color: MUITheme.palette.text.darkGrey,
      "&:first-of-type": {
        fontSize: 16,
        lineHeight: "20px",
      },
      "&:last-of-type": {
        paddingLeft: 5,
        fontSize: 12,
        lineHeight: "15px",
      },
    },
  },
  alertBoxContainer: {
    padding: "24px 31px 0",
    "& > div": {
      "&:first-of-type": {
        marginTop: 32,
        display: "flex",
      },
      "&:last-of-type": { marginTop: 25 },
    },
    "& > p": {
      padding: "13px 11px",
      "&:first-of-type": {
        margin: 0,
        display: "flex",
        "& svg": {
          color: MUITheme.palette.primary.main,
          fontSize: 20,
        },
      },
      "&:last-of-type": { marginTop: 8 },
      "& > p": { wordBreak: "break-word" },
    },
  },
  infoAlertMessage: {
    paddingLeft: 17,
    color: MUITheme.palette.text.primary,
    fontSize: 14,
    lineHeight: "18px",
  },
  CardActions: {
    padding: "24px 0 0",
    justifyContent: "center",
  },
  label: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  iconTooltipContainer: {
    width: "auto !important",
    "& > svg": {
      paddingRight: 14,
      color: MUITheme.palette.text.disabled,
      cursor: "pointer",
      fontSize: 18,
      verticalAlign: "middle",
    },
    "& p": {
      width: 300,
      padding: 16,
      borderRadius: 4,
      display: "none",
      position: "absolute",
      bottom: 25,
      left: 0,
      background: MUITheme.palette.text.lightGrey,
      boxShadow: "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)",
      color: MUITheme.palette.text.white,
      fontSize: 16,
      lineHeight: "20px",
    },
    "&:hover": {
      "& svg": { color: MUITheme.palette.primary.main },
      "& p": { display: "block" },
    },
  },
  renewedAmtContainer: {
    width: "100%",
  },
}));
