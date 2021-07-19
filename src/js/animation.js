"use strict"
import anime from 'animejs/lib/anime.es.js';

window.addEventListener('DOMContentLoaded', () => {
    const customSwitch = document.querySelector('.customSwitch input');
    const progressLineBG = document.querySelector('.progress-bar__line-bg');
    const progressLine = document.querySelector('.progress-bar__line');
    const percentBlock = document.querySelector('.progress-bar__percent');

    let isOn = false;
    let globInterval;
    let percentInterval;
    let percent = 0;
    
    const screenWidth = window.screen.width
    const screenHeight = window.screen.height

    customSwitch.addEventListener('click', function () {
        let globalCounter = 0;

        isOn = !isOn

        if (isOn) {
            customSwitch.classList.add('switchOn')
            progressAnim(100);

            globInterval = setInterval(() => {
                globalCounter++;
                if (globalCounter >= 100) {
                    clearInterval(globInterval)
                    return
                }
            }, 500)
        } else {
            customSwitch.classList.remove('switchOn')
            progressLine.style.width = 0 + "%"
            percentBlock.innerText = 0 + "%"
            progressLine.style.backgroundColor = "#fff";
            progressLineBG.style.borderColor = "#fff";

            clearInterval(globInterval)
            clearInterval(percentInterval)
            percent = 0;

            // anim-Back
            
            anime({
                targets: '.monitor-svg #svg-base',
                x: {
                    value: 1.04688,
                    duration: 1500
                },
                y: {
                    value: 310.145,
                    duration: 1500
                },
                width: {
                    value: 401.905,
                    duration: 1500,
                },
                height: {
                    value: 91.3555,
                    duration: 1500
                },
                round: 1,
                easing: "linear",
            });
            anime({
                targets: '.monitor-svg #svg-leg',
                x: {
                    value: 65.6953,
                    duration: 1500
                },
                y: {
                    value: 291.927,
                    duration: 1500
                },
                width: {
                    value: 271.669,
                    duration: 1500,
                },
                height: {
                    value: 18.1227,
                    duration: 1500
                },
                round: 1,
                easing: "linear",
            });
            anime({
                targets: '.monitor-svg #svg-body',
                x: {
                    value: 43.9141,
                    duration: 1500
                },
                y: {
                    value: 1.5,
                    duration: 1500
                },
                width: {
                    value: 315.745,
                    duration: 1500,
                },
                height: {
                    value: 290.194,
                    duration: 1500
                },
                round: 1,
                easing: "linear",
            });
            anime({
                targets: '.monitor-svg #svg-face',
                x: {
                    value: 83.6445,
                    duration: 1500
                },
                y: {
                    value: 35.2798,
                    duration: 1500
                },
                width: {
                    value: 237.134,
                    duration: 1500,
                },
                height: {
                    value: 190.142,
                    duration: 1500
                },
                round: 1,
                easing: "linear",
            });
            anime({
                targets: '.monitor-svg #four-circle',
                cx: {
                    value: 256.665,
                    duration: 1500
                },
                cy: {
                    value: 262.05,
                    duration: 1500
                },
                translateX: {
                    value: 0,
                    duration: 1500
                },
                opacity: {
                    value: 1,
                    duration: 1500,
                },
                easing: "linear",
            });
            anime({
                targets: '.monitor-svg #fifth-circle',
                cx: {
                    value: 275.984,
                    duration: 1500
                },
                cy: {
                    value: 262.05,
                    duration: 1500
                },
                r: {
                    value: 4.23191,
                    duration: 1500
                },
                easing: "linear",
            });
            anime({
                targets: '.progress-bar',
                top: {
                    value: 110,
                    duration: 1500
                },
                left: {
                    value: 0,
                    duration: 1500
                },
                easing: "linear",
            });
            if(percent === 0 && screenWidth < 1024){
                anime({
                    targets: '.progress-bar',
                    top: {
                        value: 90,
                        duration: 1500
                    },
                    left: {
                        value: 0,
                        duration: 1500
                    },
                    easing: "linear",
                });
            }
            if(percent === 0 && screenWidth < 768){
                anime({
                    targets: '.progress-bar',
                    top: {
                        value: 45,
                        duration: 1500
                    },
                    left: {
                        value: 0,
                        duration: 1500
                    },
                    easing: "linear",
                });
            }

            // вышел и вернулся
            anime({
                targets: '.monitor-svg #three-circle',
                opacity: {
                    duration: 1500,
                    value: 1,
                },
                translateX: {
                    duration: 1500,
                    value: 0
                },
                easing: "linear",
            });
        }
    });

    function progressAnim(timeMS) {


        if (percent === 100) {
            clearInterval(percentInterval)
            return
        }

        percentInterval = setInterval(() => {
            percent++
            progressLine.style.width = percent + "%"
            percentBlock.innerText = percent + "%"

            if (percent === 100) {
                progressLine.style.backgroundColor = "#73F367";
                progressLineBG.style.borderColor = "#73F367";
                clearInterval(percentInterval)
            }

            // monitor anim
            if (percent === 20) {
                anime({
                    targets: '.monitor-svg #svg-base',
                    x: {
                        value: 57,
                        duration: 1500
                    },
                    y: {
                        value: 387,
                        duration: 1500
                    },
                    width: {
                        value: 311,
                        duration: 1500,
                    },
                    height: {
                        value: 15,
                        duration: 1500
                    },
                    round: 1,
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #svg-leg',
                    x: {
                        value: 82,
                        duration: 1500
                    },
                    y: {
                        value: 339,
                        duration: 1500
                    },
                    width: {
                        value: 263,
                        duration: 1500,
                    },
                    height: {
                        value: 48,
                        duration: 1500
                    },
                    round: 1,
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #svg-body',
                    y: {
                        value: 24,
                        duration: 1500
                    },
                    width: {
                        value: 343,
                        duration: 1500,
                    },
                    height: {
                        value: 315,
                        duration: 1500
                    },
                    round: 1,
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #svg-face',
                    width: {
                        value: 286,
                        duration: 1500,
                    },
                    height: {
                        value: 237,
                        duration: 1500
                    },
                    x: {
                        value: 72,
                        duration: 1500
                    },
                    y: {
                        value: 51,
                        duration: 1500
                    },
                    round: 1,
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #four-circle',
                    cx: {
                        value: 317,
                        duration: 1500
                    },
                    cy: {
                        value: 315,
                        duration: 1500
                    },

                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #fifth-circle',
                    cx: {
                        value: 340,
                        duration: 1500
                    },
                    cy: {
                        value: 315,
                        duration: 1500
                    },

                    easing: "linear",
                });
                // progress-bar
                anime({
                    targets: '.progress-bar',
                    top: {
                        value: 141,
                        duration: 1500
                    },
                    left: {
                        value: 25,
                        duration: 1500
                    },
                    easing: "linear",
                });
                if(percent === 20 && screenWidth < 1024){
                    anime({
                        targets: '.progress-bar',
                        top: {
                            value: 111,
                            duration: 1500
                        },
                        left: {
                            value: 25,
                            duration: 1500
                        },
                        easing: "linear",
                    });
                }
                if(percent === 20 && screenWidth < 768){
                    anime({
                        targets: '.progress-bar',
                        top: {
                            value: 65,
                            duration: 1500
                        },
                        left: {
                            value: 10,
                            duration: 1500
                        },
                        easing: "linear",
                    });
                }

                // вышел
                anime({
                    targets: '.monitor-svg #three-circle',
                    opacity: {
                        duration: 1500,
                        value: 0,
                    },
                    translateX: {
                        duration: 1500,
                        value: -700
                    },
                    easing: "linear",
                });
            }
            if (percent === 50) {
                anime({
                    targets: '.monitor-svg #svg-base',
                    x: {
                        value: 119,
                        duration: 1500
                    },
                    y: {
                        value: 390,
                        duration: 1500
                    },
                    width: {
                        value: 178,
                        duration: 1500,
                    },
                    height: {
                        value: 12,
                        duration: 1500
                    },
                    round: 1,
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #svg-leg',
                    x: {
                        value: 175,
                        duration: 1500
                    },
                    y: {
                        value: 319,
                        duration: 1500
                    },
                    width: {
                        value: 63,
                        duration: 1500,
                    },
                    height: {
                        value: 71,
                        duration: 1500
                    },
                    round: 1,
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #svg-body',
                    x: {
                        value: 52,
                        duration: 1500
                    },
                    y: {
                        value: 50,
                        duration: 1500
                    },
                    width: {
                        value: 310,
                        duration: 1500,
                    },
                    height: {
                        value: 269,
                        duration: 1500
                    },
                    round: 1,
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #svg-face',
                    x: {
                        value: 62,
                        duration: 1500
                    },
                    y: {
                        value: 62,
                        duration: 1500
                    },
                    width: {
                        value: 290,
                        duration: 1500,
                    },
                    height: {
                        value: 234,
                        duration: 1500
                    },
                    rx: {
                        value: 3,
                        duration: 1500
                    },
                    round: 1,
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #four-circle',
                    cx: {
                        value: 305,
                        duration: 1500
                    },
                    cy: {
                        value: 308,
                        duration: 1500
                    },

                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #fifth-circle',
                    cx: {
                        value: 328,
                        duration: 1500
                    },
                    cy: {
                        value: 308,
                        duration: 1500
                    },

                    easing: "linear",
                });
                anime({
                    targets: '.progress-bar',
                    top: {
                        value: 152,
                        duration: 1500
                    },
                    left: {
                        value: 10,
                        duration: 1500
                    },
                    easing: "linear",
                });
                if(percent === 50 && screenWidth < 1024){
                    anime({
                        targets: '.progress-bar',
                        top: {
                            value: 111,
                            duration: 1500
                        },
                        left: {
                            value: 10,
                            duration: 1500
                        },
                        easing: "linear",
                    });
                }
                if(percent === 50 && screenWidth < 768){
                    anime({
                        targets: '.progress-bar',
                        top: {
                            value: 65,
                            duration: 1500
                        },
                        left: {
                            value: 5,
                            duration: 1500
                        },
                        easing: "linear",
                    });
                }
            }
            if (percent === 70) {
                anime({
                    targets: '.monitor-svg #svg-base',
                    x: {
                        value: 106,
                        duration: 1500
                    },
                    y: {
                        value: 392,
                        duration: 1500
                    },
                    width: {
                        value: 198,
                        duration: 1500,
                    },
                    height: {
                        value: 10,
                        duration: 1500
                    },
                    round: 1,
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #svg-leg',
                    x: {
                        value: 167,
                        duration: 1500
                    },
                    y: {
                        value: 321,
                        duration: 1500
                    },
                    width: {
                        value: 78,
                        duration: 1500,
                    },
                    height: {
                        value: 71,
                        duration: 1500
                    },
                    round: 1,
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #svg-body',
                    x: {
                        value: 0,
                        duration: 1500
                    },
                    y: {
                        value: 52,
                        duration: 1500,
                    },
                    width: {
                        value: 404,
                        duration: 1500,
                    },
                    height: {
                        value: 269,
                        duration: 1500
                    },
                    round: 1,
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #svg-face',
                    x: {
                        value: 13,
                        duration: 1500
                    },
                    y: {
                        value: 63,
                        duration: 1500
                    },
                    width: {
                        value: 378,
                        duration: 1500,
                    },
                    height: {
                        value: 228,
                        duration: 1500
                    },
                    rx: {
                        value: 6,
                        duration: 1500
                    },
                    round: 1,
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #four-circle',
                    translateX: {
                        value: -700,
                        duration: 1500
                    },
                    opacity: {
                        value: 0,
                        duration: 1500,
                    },
                    easing: "linear",
                });
                anime({
                    targets: '.monitor-svg #fifth-circle',
                    cx: {
                        value: 205,
                        duration: 1500
                    },
                    cy: {
                        value: 306,
                        duration: 1500
                    },
                    r: {
                        value: 6,
                        duration: 1500,
                    },
                    easing: "linear",
                });
                anime({
                    targets: '.progress-bar',
                    top: {
                        value: 152,
                        duration: 1500
                    },
                    left: {
                        value: 0,
                        duration: 1500
                    },
                    easing: "linear",
                });
                if(percent === 70 && screenWidth < 1024){
                    anime({
                        targets: '.progress-bar',
                        top: {
                            value: 120,
                            duration: 1500
                        },
                        left: {
                            value: 0,
                            duration: 1500
                        },
                        easing: "linear",
                    });
                }
                if(percent === 70 && screenWidth < 768){
                    anime({
                        targets: '.progress-bar',
                        top: {
                            value: 65,
                            duration: 1500
                        },
                        left: {
                            value: 0,
                            duration: 1500
                        },
                        easing: "linear",
                    });
                }
            }

        }, timeMS)
    }

    
    const dots = document.querySelectorAll('.dots a[href^="#"]');
    for (let item of dots) {
        item.addEventListener("click", (eve) => {
            eve.preventDefault();
            let hash = eve.target.getAttribute('href');
            let target = document.querySelector(hash);
            let headerOffset = 100;
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            if (!eve.target.classList.contains('active') && eve.target.classList.contains('dots-list__item')) {
                document.querySelector(".dots-list__item.active").classList.remove('active')
                eve.target.classList.add('active')
            }
        })
    }

    const dotContainer = document.querySelector('.dots');
    
    dotContainer.addEventListener("click", function(eve){
        if (!eve.target.closest("li").classList.contains('active') && eve.target.closest("li").classList.contains('dots-list__item')){
            document.querySelector(".dots-list__item.active").classList.remove('active')
            eve.target.closest("li").classList.add('active')
        }
    })
})