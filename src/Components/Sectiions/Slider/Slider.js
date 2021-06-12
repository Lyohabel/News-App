import React from 'react';
import * as styles from './Slider.module.css'

function Slider() {

    const sliderNextPrev = (dir) => {
        const slider = document.querySelector('.newsList')       

        if (dir === 'next') {
        slider.appendChild(slider.firstElementChild);
        } else if (dir === 'prev') {
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
        } 
    }

    return (    
        <section className={styles.search}>
            <div className="container">
                <div className={styles.wrapper}>
                    <button onClick={() => { sliderNextPrev('prev') }} className={styles.buttonSliderPrev}></button>

                    <h2 className={styles.sliderTitle}>News from Top Publishers</h2>

                    <button onClick={() => { sliderNextPrev('next') }} className={styles.buttonSliderNext}></button>
                </div>                
            </div>            
        </section>    
      )

}

export default Slider;