import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    title: {
        letterSpacing: "0.1rem",
        lineHeight: "1.25",
        marginBottom: "0.15rem",
        fontSize: "2rem"
    },
    form: {
        width: "90vw",
        maxWidth: "1170px",
        margin: "3rem auto",
    },
    error: {
        color: "red",
        paddingTop: "0.5rem",
        fontSize: "2.15rem"
    }
}))