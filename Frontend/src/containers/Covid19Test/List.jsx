import React from 'react'
import Grid from '@mui/material/Grid';
import TestLab from './TestLab';

export default function List({list}) {
  return (
    <div>
        <Grid container spacing={10} direction="column">
          {list.map((item) => (
                  
                    <Grid container item xs={12} sm={6} md={5} lg={5} justifyContent="center">
                      <TestLab key={item.id} item={item} />
                    </Grid>     
                  )
              )
          }
        </Grid>
    </div>
  )
}
