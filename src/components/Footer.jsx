function Footer(){
    const date = new Date();
    let year = date.getFullYear();
    return(
        <div>
            <footer>
                <p>Copyright © {year}</p>
            </footer>
        </div>
    )
}

export default Footer;