import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Testcomponent from './Testcomponent';
import Table from './Table';
import AddRemoveInputField from './AddRemoveInputField';
import Apitable from './Apitable';
import Formvalidation from './Formvalidation';
import PageNotFound from "./PageNotFound";

export default function Routerweb() {
  return (
        
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Apitable />}/>
            <Route path="/data" element={<Apitable />}/>
            <Route path="/blogs" element={<Table />} />
            <Route path="/contact" element={<Formvalidation />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/test" element={<Testcomponent />} />
        </Routes>
    </BrowserRouter>
  )
}