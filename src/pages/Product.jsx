import Helmet from "../components/Hemet";
import { useParams } from "react-router-dom";
import productData from "../assets/fake-data/products";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCart from "../components/ProductCart";
import ProductView from "../components/ProductView";
function Product(props) {
  const params = useParams();
  const product = productData.getProductBySlug(params.slug);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView data={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} smCol={1} mdCol={2} gap={20}>
            {productData.getProducts(8).map((item, index) => (
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
    </Helmet>
  );
}

export default Product;
