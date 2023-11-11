import Footer from "../components/footer";
import Header from "../components/header";
import Login from "../components/login";
import SignUp from "../components/signUp";
import { Page, Grid } from "@geist-ui/core";


export default function Authentication() {

  return (
    <>
      <Header />
      <Page>
        <Grid.Container gap={2} justify="center" height="100px">
          <Grid xs={10}>
            <Login />
          </Grid>
          <Grid xs={10}>
           <SignUp/>
          </Grid>
        </Grid.Container>
      </Page>
      <Footer />
    </>
  );
}
