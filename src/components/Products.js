import React from "react";
import '../CSS/Products.css';
import AllProducts from './subComponents/AllProducts.js';

function Products() {
  // const sprinklerHead = require('../assets/sprinklerHead.jpg');
  const products = AllProducts();
  
  return (
    <>
      <div className="productsPage">
        <div className="producCardsContainer">
          {
            products.map((pro)=>
              <div className="productCard" style={{"--order":pro.subProductSize}}>
                <div className="productTitle">
                  <div className="productImg">
                    <img className="productImgInner" alt="productImg" src={pro.productImage}/>
                  </div>
                  <div>
                    {pro.productName}
                  </div>
                  <div className="productTitleInfo">
                    {pro.productInfo}
                  </div>
                </div>
                <div className="productInfo" style={{"--order":pro.subProductSize}}>
                  {
                    pro.subProducts.map((subPro)=>
                      <div className="subProductCard">
                        <div>
                          <img className="subProductImg" alt="subproImg" src={subPro.subProductImage}/>
                        </div>
                        <div>
                          {
                            subPro.subProductName
                          }
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>

    </>
  );
}

export default Products;
