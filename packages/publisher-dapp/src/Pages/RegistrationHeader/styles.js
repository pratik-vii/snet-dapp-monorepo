export const useStyles = MUITheme => ({
  registrationHeaderContainer: { 
  	padding: '25px 0',
  	flexWrap: 'nowrap',
  	alignItems: 'center',
  	backgroundColor: MUITheme.palette.background.mainContent,
    [MUITheme.breakpoints.down('xs')]: { 
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
  },
  logoContainer: {
    "& h1": {
      width: 230,
      margin: 0,
      "& span": {
        "&:before": { color: MUITheme.palette.purple.main },
      },
      "& img": { width: "100%" },
    },
  },
  headerLink: {
    textAlign: "right",
    '& p':{
    	color: MUITheme.palette.text.lightGrey,
    	fontSize:16,
    	lineHeight: '22px'
    },
    "& a": {
      color: MUITheme.palette.primary.main,
      fontSize: 16,
      fontWeight: 600,
      textDecoration: 'none',
      "&:hover": {
        cursor: "pointer",
        textDecoration: "underline",
      },
    }
  }
});
