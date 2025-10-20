import React from 'react';

interface LoadingWrapperProps {
  loaded: boolean;
  children: React.ReactNode;
}

export const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ loaded, children }) => (
  <span style={{
    opacity: loaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out'
  }}>
    {children}
  </span>
);
