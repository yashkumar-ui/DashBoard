import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import theme from './theme';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import ScatterPlot from './components/ScatterPlot';

const Wrapper = styled(Card)`
  background-color: #1e1e2f !important;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="bg-gray-900 text-white min-h-screen  font-roboto pb-3 " >
       
           <Typography variant="h4" component="h1" gutterBottom className="text-center" style={{padding:"30px"}}>
          Dashboard
           </Typography>
           <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Wrapper>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Sales Bar Chart
                  </Typography>
                  <BarChart />
                </CardContent>
              </Wrapper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Wrapper>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Revenue Line Chart
                  </Typography>
                  <LineChart />
                </CardContent>
              </Wrapper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Wrapper>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Distribution Pie Chart
                  </Typography>
                  <PieChart />
                </CardContent>
              </Wrapper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Wrapper>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Scatter Plot
                  </Typography>
                  <ScatterPlot />
                </CardContent>
              </Wrapper>
            </motion.div>
          </Grid>
           </Grid>

           

      </Container>
    </ThemeProvider>
  );
};

export default App;
