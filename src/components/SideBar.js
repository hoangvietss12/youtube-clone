import { Stack } from "@mui/material";
import {categories} from '../utils/constant'



function SideBar({ selectedCategory, setSelectedCategory }) {
    return ( 
        <Stack 
            direction="row"
            sx={{
                overflow: 'auto',
                height: { sx: 'auto', md: '95%'},
                width: { sx: 'auto', md: '170px'},
                flexDirection: {md: 'column'}
            }}
        >
            {categories.map((category, index) => {
                return (
                    <button 
                    className="category-btn" 
                    key={index}
                    style={{
                        background: category.name === selectedCategory && '#FC1503',
                        color: '#fff'
                    }}
                    onClick={() => {
                        setSelectedCategory(category.name)
                    }}
                >
                        <span style={{ color: category.name === selectedCategory ? '#fff' : 'red', marginRight: '15px' }}>
                            {category.icon}
                        </span>
                        <span style={{ opacity: category.name === selectedCategory  ? '1' : '0.8' }}>
                            {category.name}
                        </span>
                </button>
                )
            })}

        </Stack>
     );
}

export default SideBar;