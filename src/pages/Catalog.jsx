import { useState, useEffect, useCallback, useRef } from "react";
import productData from "../assets/fake-data/products";
import category from "../assets/fake-data/category";
import Color from "../assets/fake-data/product-color";
import Size from "../assets/fake-data/product-size";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import InfinityList from "../components/InfinityList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Helmet from '../components/Hemet'
function Catelog() {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };
  const filterRef = useRef()
  const productList = productData.getAllProducts();
  const [products, setProduct] = useState(productList);
  const [filter, setFilter] = useState(initFilter);
  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };
  const clearFilter = () => setFilter(initFilter);
  const updateProduct = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }

    setProduct(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProduct();
  }, [updateProduct]);

  const toggleFilter = () => filterRef.current.classList.toggle('active')
  return (
    <Helmet title="Catalog">
      <div className="catalog">
        <div className="catalog__fillter " ref={filterRef}>
          <div className="catalog__filter__close">
            <FontAwesomeIcon icon={faClose} onClick={toggleFilter}/>
          </div>
          <div className="catalog__fillter__widget">
            <div className="catalog__fillter__widget__title">
              Danh mục sản phẩm
            </div>
            <div className="catalog__fillter__widget__content">
              {category.map((item, index) => (
                <div key={index}>
                  <Checkbox
                    lable={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__fillter__widget">
            <div className="catalog__fillter__widget__title">Màu sắc</div>
            <div className="catalog__fillter__widget__content">
              {Color.map((item, index) => (
                <div key={index}>
                  <Checkbox
                    lable={item.display}
                    onChange={(input) =>
                      filterSelect("COLOR", input.checked, item)
                    }
                    checked={filter.color.includes(item.color)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__fillter__widget">
            <div className="catalog__fillter__widget__title">Kích thước</div>
            <div className="catalog__fillter__widget__content">
              {Size.map((item, index) => (
                <div key={index}>
                  <Checkbox
                    lable={item.display}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.size.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__fillter__widget">
            <div className="catalog__fillter__widget__content">
              <Button primary onClick={clearFilter}>
                Xóa bộ lọc
              </Button>
            </div>
          </div>

        </div>
          <div className="catalog__fillter__toggle">
            <Button primary onClick={() => {toggleFilter()}}>Bộ lọc</Button>  
          </div>
          <InfinityList data={products} />
      </div>
    </Helmet>
  );
}

export default Catelog;
