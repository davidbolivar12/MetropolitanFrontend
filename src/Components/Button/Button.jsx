import React from "react";
import PropTypes from "prop-types";


export default function Button({ text, onClick, disabled }) {
    return (
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
        disabled={disabled}
        >
        {text}
        </button>
    );
    }
