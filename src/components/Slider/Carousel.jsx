import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';


export default class CarouselAds extends Component {

    componentDidMount() {
        const options = {
          duration: 300,

        };
        M.Carousel.init(this.Carousel, options);
    
        //Instance Plugin
        setInterval(() => {
            let instance = M.Carousel.getInstance(this.Carousel);
            instance.next(1);
        }, 8000);
        
      }

      render() {
        return (
          <div ref={Carousel => {this.Carousel = Carousel;}} className="carousel carousel-slider center-align container" style={styles.carouselPosition}>
            <div className="carousel-item red white-text" href="#one!" style={styles.bgAddone}>
                <h2>Publicidad</h2>
                <p className="white-text">Espacio publicitario #1</p>
            </div>
            <div className="carousel-item amber white-text" href="#two!" style={styles.bgAddtwo}>
                <h2>Publicidad</h2>
                <p className="white-text">Espacio publicitario #2</p>
            </div>
            <div className="carousel-item green white-text" href="#three!" style={styles.bgAddthree}>
                <h2>Publicidad</h2>
                <p className="white-text">Espacio publicitario #3</p>
            </div>
            <div className="carousel-item blue white-text" href="#four!" style={styles.bgAddfour}>
                <h2>Publicidad</h2>
                <p className="white-text">Espacio publicitario #4</p>
            </div>
          </div>
        );
      }
    }

    const styles = {
      carouselPosition: {
        marginTop: '4.5rem'
      },
      bgAddone: {
        backgroundImage: 'url("https://camo.githubusercontent.com/a394417886811ae983a9c8506bb86054cf746993/68747470733a2f2f6372797374616c2d63646e322e6372797374616c636f6d6d657263652e636f6d2f70686f746f732f363333303536352f73706c61736842616e6e65725f706f6b656d6f6e2e6a7067")',
      },
      bgAddtwo: {
        backgroundImage: 'url("https://www.themarysue.com/wp-content/uploads/2016/01/yu-gi-oh-original-cast.jpg")',
      },
      bgAddthree: {
        backgroundImage: 'url("https://m.media-amazon.com/images/S/abs-image-upload-na/e/AmazonStores/A1RKKUPIHCS9HS/2b8bf264f24f479c10077683368fadc6.w1600.h600.jpg")',
      },
      bgAddfour: {
        backgroundImage: 'url("https://i.servimg.com/u/f60/12/80/34/13/banner10.jpg")'
      }
      }
