import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            {/* First Navigation */}
            <nav className="navbar nav-first navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="navbar-brand.svg" alt="Logo" />
                    </a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="#home">
                                CALL US : <span className="pl-2 text-muted">(123) 456 7890</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Second Navigation */}
            <nav className="nav-second navbar custom-navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                <div className="container">
                    <span className="navbar-brand font-weight-bold text-light">
                        Trưa nay ăn gì
                    </span>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-2">
                                <a className="nav-link text-light" href="#about">Trang chủ</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link text-light" href="#service">Thực đơn</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link text-light" href="#team">Khuyến mãi</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link text-light" href="#about">Về chúng tôi</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link text-light" href="#merchant">Trở thành người bán</a>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center">
                            <a href="#" className="text-light mx-2">
                                <i className="ti-bell"></i>
                            </a>
                            <a href="#" className="text-light mx-2">Hỗ trợ</a>

                            <div className="dropdown mx-2">
                                <a className="text-light dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                    Tiếng Việt
                                </a>
                                <div className="dropdown-menu">
                                    <a className="text-dark dropdown-item" href="#">English</a>
                                    <a className="text-dark dropdown-item" href="#">中文</a>
                                </div>
                            </div>

                            <a href="#" className="btn btn-outline-primary mx-2">Đăng ký</a>
                            <a href="#" className="btn btn-primary">Đăng nhập</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;