function Header() {
    return (
        <header id="heading">
            <div className="hero">
                <p className="eyebrow">Discover GitHub creators</p>
                <h1>Github Profile Viewer</h1>
                <p className="hero-copy">
                    Explore curated GitHub profiles with a clean, modern interface. Tap any profile to visit the developer’s page.
                </p>
                <a className="hero-button" href="#profiles">
                    Browse Profiles
                </a>
            </div>
        </header>
    );
}

export default Header;