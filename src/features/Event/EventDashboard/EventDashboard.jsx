import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class EventDashboard extends Component {
    render() {
        return(
            <Grid>
                <Grid.Column width={16}>
                    <h2>Filter</h2>
                </Grid.Column>
                <Grid.Row width={16}>
                    <h2>Content</h2>
                </Grid.Row>
            </Grid>
        )
    }
}

export default EventDashboard;