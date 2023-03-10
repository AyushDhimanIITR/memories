import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from "./Components/images/memories.png"
import Form from "./Components/Form/Forms";
import Posts from "./Components/Posts/Posts";
import { useDispatch } from 'react-redux';

import { getPosts } from "./actions/posts"

import useStyles from "./styles";


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Memories
                    <img className={classes.image} src={memories} alt="" height="60" />
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainCont} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId = {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId}  />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;