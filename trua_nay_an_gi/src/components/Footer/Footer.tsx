import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* Prefooter Section */}
            <div className="prefooter py-4">
                <div className="container">
                    <div className="row justify-content-between align-items-center text-center">
                        <div className="col-md-3 text-md-left mb-3 mb-md-0">
                            <img src="/navbar-brand.svg" width="100" alt="Logo" className="mb-0" />
                        </div>
                        <div className="col-md-9 text-md-right">
                            <a href="#" className="px-3"><small className="font-weight-bold">Về chúng tôi</small></a>
                            <a href="#" className="px-3"><small className="font-weight-bold">Địa điểm</small></a>
                            <a href="#" className="px-3"><small className="font-weight-bold">Trung tâm hỗ trợ</small></a>
                            <a href="#" className="pl-3"><small className="font-weight-bold">Điều khoản</small></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Page Footer */}
            <footer className="main-footer">
                <div className="container">
                    <div className="row align-items-center text-center text-md-left">
                        <div className="col">
                            <p className="mb-0 small">&copy; {currentYear}, Trưa nay ăn gì - All rights reserved</p>
                        </div>
                        <div className="social-links d-none d-md-block">
                            <h6 className="small mb-0">
                                <a href="#" className="px-2"><i className="ti-facebook"></i></a>
                                <a href="#" className="px-2"><i className="ti-twitter"></i></a>
                                <a href="#" className="px-2"><i className="ti-instagram"></i></a>
                                <a href="#" className="px-2"><i className="ti-google"></i></a>
                            </h6>
                        </div>
                    </div>
                </div>
            </footer>
            
            <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
            <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>

            <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script>

            <script src="assets/js/pigga.js"></script>
        </>
    );
};

export default Footer;