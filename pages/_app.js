import '../styles/globals.css'
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
