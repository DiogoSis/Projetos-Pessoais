import '../styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }) {
  const {pathname} = useRouter()
  return (
    <AnimatePresence mode = 'wait'>
      <PageWrapper key={pathname}>
        <Component {...pageProps} />
      </PageWrapper>
    </AnimatePresence>
    
  );
}

export default MyApp;
