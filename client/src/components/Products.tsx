import { Container, Box, Grid, Card } from "@mui/material"
import Page from "../interfaces/page"
import Product from "./Product"

const Products = (props: { name: string, state: { user: string, token: string, products: any } }) => {
  console.log("products props", props)
  if (props.state.products) {
    var products = props.state.products.map((product: any, index: number) => {
      return (<Product {...product} key={index} />)
    })
  }
  return (<div>Products Page
    <Container>
      <Box>
        <Grid container spacing={5}>
          {products}

        </Grid>

      </Box>

    </Container>
  </div>)
}

export default Products