import '../styles/globals.css'
import Navbar from 'components/Navbar.js'
import '@fontsource-variable/nunito-sans';
import '@fontsource/special-elite';
import { TableDataProvider } from './api/TableDataContext';


function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
 <TableDataProvider>
      <Component {...pageProps} />
    </TableDataProvider>
  </>
}

export default MyApp