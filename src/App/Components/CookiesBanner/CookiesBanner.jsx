import './styles.css';
import cookie from '../../Images/cookie.svg';
export const CookiesBaner = () => {
  function setCookieBanner() {
    localStorage.setItem('cookieState', 1);
  }
  function getCookieState() {
    return localStorage.getItem('cookieState');
  }
  const isSeen = getCookieState();

  return (
    !isSeen && (
      <div className="cookiess">
        <div className="cookiessContent">
          <img src={cookie} />
          <div>
            <h3>Pozwól na pliki cookies</h3>
            <p>
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosować użycie do swoich
              referencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
              zgody”, aby następnie wybrać te które odpowiadają Twoim
              indywidualnym preferencjom.
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={setCookieBanner}
            className="cookiesButton buttonPrimary"
          >
            W porządku
          </button>
          <button
            onClick={setCookieBanner}
            className="cookiesButton buttonSecondary"
          >
            Dopasuj zgody
          </button>
        </div>
      </div>
    )
  );
};
