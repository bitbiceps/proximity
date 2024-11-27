import React from 'react'

const PageHeader = ({ label }) => {
    return (
        <div className="text-center text-[52px] text-[#201446] font-albara font-medium">
            {label || "Please Add Label"}
        </div>
    )
}

export default PageHeader