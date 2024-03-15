import React from 'react';
import Box from '@mui/material/Box';

const PortfolioImageGallery = () => {
    return (
        <div className="mt-20 mx-auto p-6">
            <h1 className="text-4xl mb-[2%] text-[#3A3A3A] text-left md:ml-24 ml-12">
                Gallery
            </h1>
            <HorizontalScrollTwoRowGallery />
        </div>
    );
};

function HorizontalScrollTwoRowGallery() {
    return (
        <Box sx={{ overflowX: 'auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}> {/* Reduced gap between rows */}
            {/* Row 1 */}
            <Box sx={{ display: 'flex', gap: '8px' }}> {/* Reduced gap between images */}
                {itemData.slice(0, Math.ceil(itemData.length / 2)).map((item, index) => (
                    <Box
                        key={index}
                        component="img"
                        sx={{
                            height: '200px', 
                            width: 'auto',  
                            flexShrink: 0,
                        }}
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                    />
                ))}
            </Box>
            {/* Row 2 */}
            <Box sx={{ display: 'flex', gap: '8px' }}>
                {itemData.slice(Math.ceil(itemData.length / 2)).map((item, index) => (
                    <Box
                        key={index}
                        component="img"
                        sx={{
                            height: '200px', 
                            width: 'auto',  
                            flexShrink: 0,
                        }}
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                    />
                ))}
            </Box>
        </Box>
    );
}

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
    },
    {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Honey",
    },
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball",
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern",
    },
    {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        title: "Mushrooms",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Tomato basil",
    },
    {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        title: "Sea star",
    },
    {
        img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        title: "Bike",
    },
];

export default PortfolioImageGallery;
