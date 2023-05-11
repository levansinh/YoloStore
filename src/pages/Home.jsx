import ProductCart from "../components/ProductCart";
import productData from "../assets/fake-data/products";
import Grid from "../components/Grid";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Helmet from "../components/Hemet";
import styled from "styled-components";
const Wrapper = styled.div`
width:100%;
margin:0 auto ;
 display:flex;
 align-items:center
`
function Home() {
  return (
    <div>
      <div className="product">
        <Helmet title="Trang Chủ ">
        <Wrapper>
        <Section>
            <SectionTitle>Sản phẩm bán chạy</SectionTitle>
            <SectionBody>
              <Grid col={4} smCol={1} mdCol={2} gap={40}>
              {productData.getProducts(4).map((item, index) => (
                  <ProductCart
                    key={index}
                    image02={item.image02}
                    title={item.title}
                    slug={item.slug}
                    price={Number(item.price)}
                  />
                  ))}
                  </Grid>
            </SectionBody>
          </Section>
        </Wrapper>

          
        </Helmet>
      </div>
    </div>
  );
}

export default Home;
