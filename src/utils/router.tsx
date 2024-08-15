import React, { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Landing from '../pages/Landing';
import CustomCursor from '../components/CustomCursor';
import ScrollToSection from '../utils/scrollToSection';
import SmoothScroll from '../components/SmoothScroll';
import LoadingAnimation from '../components/LoadingAnimation';
import { useAppSelector } from '../redux/hooks';

// Type pour accepter des enfants (children) dans Layout
interface LayoutProps {
  children: ReactNode;  // ReactNode accepte tout type de contenu JSX
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <CustomCursor />
    <SmoothScroll>
      <main>{children}</main>
    </SmoothScroll>
  </>
);

const Router: React.FC = () => {
  const isLoading = useAppSelector((state) => state.loading.isLoading);
  const isLandingFinished = useAppSelector((state) => state.loading.isLandingFinished);

  return (
    <BrowserRouter>
      <Routes>
        {!isLandingFinished ? (
          <Route path="/" element={<Landing />} />
        ) : isLoading ? (
          <Route path="/" element={<LoadingAnimation />} />
        ) : (
          <Route path="/" element={
            <Layout>
              <ScrollToSection />
              <Home />
            </Layout>
          } />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
