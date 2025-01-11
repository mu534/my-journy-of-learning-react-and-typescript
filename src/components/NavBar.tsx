interface props {
  cartItemsCount: number;
}
const NavBar = ({ cartItemsCount }: props) => {
  return <div>NavBar: {cartItemsCount}</div>;
};

export default NavBar;
