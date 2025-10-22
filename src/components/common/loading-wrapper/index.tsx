import React from 'react';

interface LoadingWrapperProps {
  loaded: boolean;
  children: React.ReactNode;
  error?: string | null;
}

export const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ loaded, error = null, children }) => (
  <span style={{
    opacity: loaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out'
  }}>
    {!!error ? '-' : children}
  </span>
);
