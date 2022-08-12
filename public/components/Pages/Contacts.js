import React, { Component } from 'react'

class Contacts extends Component {
    render() {
        return (
            <section classname="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <br/>
                        <h3><strong>Our Location</strong></h3>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.970652715352!2d107.6106591!3d-6.89148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2478e3dcdce37961!2sInstitut%20Teknologi%20Bandung!5e0!3m2!1sid!2sid!4v1608037083102!5m2!1sid!2sid"
                        style={{
                            border:'0',
                            width:'100%',
                            height:'315px',
                            frameborder: '0',
                            marginBottom: '2rem'
                        }} allowFullScreen></iframe>
                        </div>
                        <div className="col-md-5">
                            <h4><strong>Contact Us</strong></h4>
                            <h4>Email: oparksys@gmail.com</h4>
                            <h4>Telephone: 021 - xxxxxx</h4>
                        </div>
                    </div> 
                </div>
            </section>
        )
    }
}

export default Contacts;