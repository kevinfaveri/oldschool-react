import React from 'react';
import { Redirect } from 'react-router-dom';

export default function RedirectPage() {
  return (
    <>
      <Redirect to="/404" />
    </>
  );
}
