import './Team.css';

const Team = () => {
    return (
        <section id="team">
            <div className="container">
                <h6 className="section-subtitle text-center">Great Team</h6>
                <h3 className="section-title mb-5 text-center">Talented Chefs</h3>
                <div className="row">
                    <div className="col-md-4 my-4">
                        <div className="team-wrapper text-center">
                            <img src="/chef-1.jpg" className="circle-120 rounded-circle mb-3 shadow" alt="Quoc" />
                            <h5 className="my-3">Quốc</h5>
                            <p>Mô tả</p>
                            <h6 className="socials mt-3">
                                <a href="#" className="px-2"><i className="ti-facebook"></i></a>
                                <a href="#" className="px-2"><i className="ti-twitter"></i></a>
                                <a href="#" className="px-2"><i className="ti-instagram"></i></a>
                                <a href="#" className="px-2"><i className="ti-google"></i></a>
                            </h6>
                        </div>
                    </div>
                    <div className="col-md-4 my-4">
                        <div className="team-wrapper text-center">
                            <img src="/chef-2.jpg" className="circle-120 rounded-circle mb-3 shadow" alt="Thinh" />
                            <h5 className="my-3">Thịnh</h5>
                            <p>Mô tả</p>
                            <h6 className="socials mt-3">
                                <a href="#" className="px-2"><i className="ti-facebook"></i></a>
                                <a href="#" className="px-2"><i className="ti-twitter"></i></a>
                                <a href="#" className="px-2"><i className="ti-instagram"></i></a>
                                <a href="#" className="px-2"><i className="ti-google"></i></a>
                            </h6>
                        </div>
                    </div>
                    <div className="col-md-4 my-4">
                        <div className="team-wrapper text-center">
                            <img src="/chef-3.jpg" className="circle-120 rounded-circle mb-3 shadow" alt="Tuan" />
                            <h5 className="my-3">Tuấn</h5>
                            <p>Mô tả</p>
                            <h6 className="socials mt-3">
                                <a href="#" className="px-2"><i className="ti-facebook"></i></a>
                                <a href="#" className="px-2"><i className="ti-twitter"></i></a>
                                <a href="#" className="px-2"><i className="ti-instagram"></i></a>
                                <a href="#" className="px-2"><i className="ti-google"></i></a>
                            </h6>
                        </div>
                    </div>
                    <div className="col-md-4 my-4">
                        <div className="team-wrapper text-center">
                            <img src="/chef-4.jpg" className="circle-120 rounded-circle mb-3 shadow" alt="Phuc" />
                            <h5 className="my-3">Phúc</h5>
                            <p>Mô tả</p>
                            <h6 className="socials mt-3">
                                <a href="#" className="px-2"><i className="ti-facebook"></i></a>
                                <a href="#" className="px-2"><i className="ti-twitter"></i></a>
                                <a href="#" className="px-2"><i className="ti-instagram"></i></a>
                                <a href="#" className="px-2"><i className="ti-google"></i></a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;