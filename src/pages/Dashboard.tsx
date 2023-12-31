import * as React from 'react';
import { createTheme} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '../components/Chart';
import Deposits from '../components/Deposits';
import Orders from '../components/Orders';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  return (
    <React.Fragment>
      <h1>TODO: Implements Dynamic Data Loading for This Dash Board</h1>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Batch */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, 
              display: 'flex', 
              flexDirection: 'column' }}>
              {/**TODO: rename to Recent Batch Report */}
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
  );
}