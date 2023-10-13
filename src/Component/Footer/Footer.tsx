import FooterPage from '../../styled/FooterPage';

const Footer = () => {
    return (
        <FooterPage>
            <hr />
            <div className='info'>
                <p><span>홍도완</span> <i className="fa-brands fa-github"></i></p>
                <p><span>임홍인</span> <i className="fa-brands fa-github"></i></p>
            </div>
        </FooterPage>
    )
}

export default Footer;