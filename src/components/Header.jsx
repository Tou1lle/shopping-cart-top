import pokemonLogoURL from "./../assets/pokemon-logo.png";

function Header() {

  return (
    <header>
      <img 
        src={pokemonLogoURL} 
        alt="Logo of Pokemon"
        className="pokemon-logo header-logo"
      />
    </header>
  )
}

export default Header;