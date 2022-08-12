
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'

import Slider from 'react-slick';
class OutStandingDoctor extends Component {

    render() {

        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'> Bác sĩ nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-border'> <div className='outer-bg'>
                                    <div className='bg-image image-outstanding-doctor ' />
                                </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến Sĩ Thanh</div>
                                        <div>cơ xương khớp 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'> <div className='outer-bg'>
                                    <div className='bg-image image-outstanding-doctor ' />
                                </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến Sĩ Thanh</div>
                                        <div>cơ xương khớp 2</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'> <div className='outer-bg'>
                                    <div className='bg-image image-outstanding-doctor ' />
                                </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến Sĩ Thanh</div>
                                        <div>cơ xương khớp 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'> <div className='outer-bg'>
                                    <div className='bg-image image-outstanding-doctor ' />
                                </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến Sĩ Thanh</div>
                                        <div>cơ xương khớp 4</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'> <div className='outer-bg'>
                                    <div className='bg-image image-outstanding-doctor ' />
                                </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến Sĩ Thanh</div>
                                        <div>cơ xương khớp 5</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'> <div className='outer-bg'>
                                    <div className='bg-image image-outstanding-doctor ' />
                                </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến Sĩ Thanh</div>
                                        <div>cơ xương khớp 6</div>
                                    </div>
                                </div>
                            </div>



                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);