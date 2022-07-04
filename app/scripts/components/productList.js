import React, { useState } from 'react';
import {Card,CardMedia,Grid,CardContent, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { Loading } from './Loading';




const productList = () => {
    const {productList} = useSelector((state) => ({ ...state.product }))
    const {productList2} = useSelector((state) => ({ ...state.product }))
    console.log("Prood list" ,productList.data);
    const countItems = productList.data.length;
    console.log(countItems);
 



  return (
    
    <div>
    
    { countItems < productList2.data.length && countItems > 1 ? (`Displaying 4 out of ${countItems} results found`) : countItems == 0 ?(<h1>No results</h1>): countItems == 1 ? (`${countItems} result found`) : <h1></h1>}

        <Grid sx={{flexGrow: 1}} container>
        
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={3}>
                {productList.data ? (productList?.data?.slice(0,4).map((item, index) => (
                        <Grid key={index} item>
                            <Card sx={{maxWidth: "350"}}>
                                <CardMedia component="img" height="350" image={item.picture} alt={item.name} />
                                <CardContent>
                                    <Typography variant='body2' color="text.primary">{item.name}</Typography>
                                    <Typography variant='body2' color="text.primary">{item.price}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                ))):(<Loading />)
                }
                    
                </Grid>
            </Grid>
            
        </Grid>
       
      
    </div>
    
  )
}


export default productList