import React from 'react'
import {
    useState
} from 'react';
export default function Accordion(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (

        <div className="w-full  mt-2 p-2  categories-list">
            <button
                className="p-2 w-full text-left"
                onClick={toggleCollapse}
            >
                {props.title}
               
            </button>
       
            <div
        className={`mt-4 transition-all ease duration-300 subcategories ${
          isCollapsed ? 'max-h-0 overflow-hidden' : 'max-h-[200px] overflow-y-auto'
        }`}
      >
                <p className="text-gray-800 overflow-x-hidden">
                    
                <ul className=''>
                        {props.data.map((model, modelIndex) => (
                            
                            <li key={modelIndex} className='category-sublist'>
                            <label htmlFor={`checkbox-${modelIndex}`}>
                              <input
                                type="checkbox"
                                id={`checkbox-${modelIndex}`}
                                className="mr-2 category-input"
                              />
                              {model}
                            </label>
                          </li>
                        ))}
                    </ul>
                </p>
            </div>
        </div>

    );
};