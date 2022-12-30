import React from "react";
import Post from "./Post.js/Post";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";

import { useSelector } from 'react-redux';


const Posts = ({setCurrentId}) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId = {setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
        // <>
        //     <h1>Posts</h1>
        //     <Post />
        //     <Post />
        // </>
    )
}

export default Posts;