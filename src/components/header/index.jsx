import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Cart from '../cart/index';

// Styles
import * as Styles from './styles';
// import UserActionTypes from '../../redux/user/action-types';
import { loginUser, logoutUser } from '../../redux/user/action';
import { selectProductsCount } from '../../redux/cart/cart.selectors';

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  // const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const dispatch = useDispatch();

  const productsCount = useSelector(selectProductsCount);

  // const productsCount = useMemo(() => {
  //   return products.reduce((acc, curr) => acc + curr.quantity, 0);
  // }, [products]);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({ name: 'Felipe', email: 'felipe@gmail.com' }));
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>SAIR</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
