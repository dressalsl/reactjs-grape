import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import API from '../../api';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lista: []
        }
        API.get('/users').then(res => {
            let dados = res.data;
            this.setState({ lista: dados });
        }).catch(error => {
            console.log(error);
        });

    }

    render() {
        return (
            <Grid>
            </Grid>
        )

    }

}