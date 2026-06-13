import pokemonLogoURL from "./../assets/pokemon-logo.png";
import Navigation from "./Navigation";

function Header() {

  return (
    <header>
      <div className="header-img-container">
        <img
          src={pokemonLogoURL}
          alt="Logo of Pokemon"
          className="pokemon-logo header-logo"
        />
      </div>
      <Navigation />
    </header>
  )
}

export default Header;