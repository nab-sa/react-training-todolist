import React from "react";
import "./Header.css";


type HeaderProps = {
    title: string;
};

export const Header = ({title}: HeaderProps) => {
    return (
        <div className="header">
            <h1>To do list</h1>
        </div>
    );
  };