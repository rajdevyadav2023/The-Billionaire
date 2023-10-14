import elon from '../../assets/carousel_imgs/elon.png';
import mark from '../../assets/carousel_imgs/mark.png';
import jeff from '../../assets/carousel_imgs/jeff.png';
import gates from '../../assets/carousel_imgs/gates.png';
import CarouselItem from '../carousel_item/CarouselItem'
import './carousel.css'
import { useState } from 'react';
const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const items = [
        {
            id: 1,
            name: "Elon Musk",
            quote: "When something is important enough, you do it even if the odds are not in your favor.",
            img: elon
        },
        {
            id: 2,
            name: "Mark Zuckerberg",
            quote: "The biggest risk is not taking any risk in a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
            img: mark
        },
        {
            id: 3,
            name: "Jeff Bezos",
            quote: "No dream is too big. We all have dreams. But some of us are afraid to chase them. However, having big dreams often act as a driving force to do something great in our lives.",
            img: jeff
        },
        {
            id: 4,
            name: "Bill Gates",
            quote: "Unexpected things can derail the dreams, but staying focused can help you put one dream ahead of another.",
            img: gates
        }
    ];

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }
        setActiveIndex(newIndex);
    }
    // console.log(activeIndex)
    return (
        <div className='carousel' >
            <div className="carousel-items-list" style={{ transform: `translate(-${activeIndex * 100}%)`, zIndex:2 }}>
                {
                    items.map((item) => {
                        return <CarouselItem key={item.id} item={item} />
                    })
                }
            </div>

            <div className="carousel-buttons">
                <button onClick={() => { updateIndex(activeIndex - 1) }} className='button-arrow'><i className="fa-solid fa-chevron-left"></i></button>
                <div className="indicators">
                    {
                        items.map((item, index) => {
                            return <button onClick={()=>updateIndex(index)} className={`indicator-buttons ${index===activeIndex?"indicator-button-active": ""} `}  key={item.id}><i className="fa-regular fa-circle-dot"></i></button>
                        })
                    }


                </div>
                <button onClick={() => { updateIndex(activeIndex + 1) }} className='button-arrow'><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default Carousel