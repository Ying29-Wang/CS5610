import React from 'react';
import Header from './components/Header';

export default function App() {
  const appName = "My Awesome App"
  return <div>
    <Header myAppName={appName} />
  </div>;
}
