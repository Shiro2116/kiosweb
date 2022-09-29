import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToProduct } from '../../redux/features/productSlice';

const ProductDetailsArea = () => {
   // all products
   const product = useSelector(state => state.products.specificProduct);
   // dispatch
   const dispatch = useDispatch();
   // handleCartProduct
   const handleCartProduct = () => {
      dispatch(addToProduct(product))
   }
   return (

      <section className="product__area pb-115">
         <div className="container">
            <div className="row">
               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="product__wrapper">
                     <div className="product__details-thumb w-img mb-30">
                        <img src={product?.img_big} alt="product-details" />
                     </div>
                     <div className="product__details-content">
                        <div className="product__tab mb-40">
                           <ul className="nav nav-tabs" id="proTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">Deskripsi</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="support-tab" data-bs-toggle="tab" data-bs-target="#support" type="button" role="tab" aria-controls="support" aria-selected="false">Support</button>
                              </li>
                           </ul>
                        </div>
                        <div className="product__tab-content">
                           <div className="tab-content" id="proTabContent">
                              <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                 <div className="product__overview">
                                    <h3 className="product__overview-title">Detail Deskripsi</h3>
                                    <p>{`Untuk mengetahui info lengkap tentang fitur dari website ini, silahkan hubungi tim kami dengan klik tombol dibawah ini.`}</p> 
                                    <div className="product__social m-social grey-bg-2">
                                       <h4 className="product__social-title">Follow us</h4>
                                       <ul>
                                          <li><a href="https://wa.me/6285293026542" className="tw"><i className="fab fa-whatsapp"></i></a></li>
                                          <li><a href="https://instagram.com/kiosweb.id" className="pin"><i className="fab fa-instagram"></i></a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane fade" id="support" role="tabpanel" aria-labelledby="support-tab">
                                 <div className="product__support">
                                    <div className="latest-comments mb-55">
                                       <ul>
                                          <li>
                                             <div className="comments-box grey-bg-2">
                                                <div className="comments-info d-flex">
                                                   <div className="comments-avatar mr-15">
                                                      <img src="assets/img/product/support/sup-1.jpg" alt="" />
                                                   </div>
                                                   <div className="avatar-name">
                                                      <h5>Jason Response</h5>
                                                      <span className="post-meta">Author</span>
                                                   </div>
                                                </div>
                                                <div className="comments-text ml-65">
                                                   <p>{`Harry codswalp boot porkies up the duff morish cor blimey guvnor fa about blower twit Why it's your round matie.`}</p>
                                                </div>
                                             </div>
                                          </li>
                                          <li className="children">
                                             <div className="comments-box grey-bg-2">
                                                <div className="comments-info d-flex">
                                                   <div className="comments-avatar mr-15">
                                                      <img src="assets/img/product/support/sup-2.jpg" alt="" />
                                                   </div>
                                                   <div className="avatar-name">
                                                      <h5>Hilary Ouse</h5>
                                                      <span className="post-meta">Author</span>
                                                   </div>
                                                </div>
                                                <div className="comments-text ml-65">
                                                   <p>{`I don't want no agro dropped a clanger do one wind.!`}</p>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="post-comment-form wow fadeInUp" data-wow-delay=".2s">
                                       <h4 className="post-comment-title mb-25">Add a comment</h4>
                                       <form action="#">
                                          <div className="post-comment-inner">
                                             <div className="row">
                                                <div className="col-xl-12">
                                                   <div className="post-input d-sm-flex align-items-center mb-10">
                                                      <textarea placeholder="Comment for the author..."></textarea>
                                                      <button type="submit" className="m-btn m-btn-4"> <span></span> Post Comment</button>
                                                   </div>
                                                </div>
                                                <div className="col-xl-12">
                                                   <div className="post-agree d-flex align-items-center">
                                                      <input className="m-check-input" type="checkbox" id="m-agree" />
                                                      <label className="m-check-label" htmlFor='m-agree'>Email me when this comment receives a reply</label>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="product__details-sidebar ml-30">
                     <div className="product__proprietor white-bg mb-30">
                        <div className="product__proprietor-head mb-25">
                           <div className="product__prorietor-info mb-20 d-flex justify-content-between">
                              <div className="product__proprietor-avater d-flex align-items-center">
                                 <div className="product__proprietor-name">
                                    <h5><a href="#">Harga</a></h5>
                                 </div>
                              </div>
                              <div className="product__proprietor-price">
                                 <span className="d-flex align-items-start"><span>Rp </span>{product?.price}</span>
                              </div>
                           </div>
                        </div>
                        <div className="product__proprietor-body fix">
                           <span >
                              <a style={{cursor:'pointer'}} href="https://wa.me/6285293026542" className="m-btn m-btn-2 w-100 mb-20"> <span></span> Buat Sekarang</a>

                           </span>
                           <a href="https://wa.me/6285293026542" rel="noreferrer" target="_blank" className="m-btn m-btn-border w-100"> <span></span> Lihat Preview</a>
                        </div>
                     </div>
                     <div className="sidebar__banner" style={{ background: `url(assets/img/banner/sidebar-banner.jpg)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <h4 className="sidebar__banner-title">Check Out <br />Our free Templates</h4>
                        <Link href="/product">
                           <a className="m-btn m-btn-white"> <span></span> free template</a>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

   );
};

export default ProductDetailsArea;