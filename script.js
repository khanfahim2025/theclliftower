document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animate the main header container
    tl.from(".navbar-container", {
        y: -100,
        opacity: 0,
        duration: 1
    });

    // Animate the left, center, and right parts of the header
    tl.from(".navbar-left", {
        x: -50,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")
    .from(".navbar-center", {
        y: -30,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")
    .from(".navbar-right", {
        x: 50,
        opacity: 0,
        duration: 0.8
    }, "-=0.5");
});



// First POpup Modal
        // Modal functionality
  
        const modalOverlay = document.getElementById('modalOverlay');
        const modalContainer = document.getElementById('modalContainer');
        const closeBtn = document.getElementById('closeBtn');
        // const registrationForm = document.getElementById('registrationForm');

        document.querySelectorAll(".firstpopuptrigger").forEach(element => {
            element.addEventListener("click",(e)=>{
                e.preventDefault();
                modalOverlay.style.display = "flex";
            })
        });

        // Close modal function
        function closeModal() {
            modalContainer.style.animation = 'modalSlideOut 0.3s ease-in forwards';
            setTimeout(() => {
                modalOverlay.style.display = 'none';
                modalContainer.style.animation = 'modalSlideIn 0.5s ease-out'; // Reset for next open
            }, 300);
        }
        
        // Add slide-out animation style
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes modalSlideOut {
                from { opacity: 1; transform: translateY(0) scale(1); }
                to { opacity: 0; transform: translateY(50px) scale(0.95); }
            }
        `;
        document.head.appendChild(styleSheet);


        // Close button event
        closeBtn.addEventListener('click', closeModal);

        // Close on overlay click
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Form submission
        // registrationForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
            
        //     const firstName = registrationForm.querySelector('input[type="text"]').value;
        //     const phone = registrationForm.querySelector('input[type="tel"]').value;
        //     const countryCode = registrationForm.querySelector('.country-code').value;
            
        //     const button = registrationForm.querySelector('.cta-button');
        //     const originalText = button.innerHTML;
            
        //     button.innerHTML = 'Processing...';
        //     button.disabled = true;
            
        //     setTimeout(() => {
        //         alert(`Thank you ${firstName}! We'll contact you at ${countryCode} ${phone} with exclusive offers.`);
        //         button.innerHTML = originalText;
        //         button.disabled = false;
                
        //         registrationForm.reset();
        //     }, 1500);
        // });
        
        // Phone number validation to allow only numbers
        // document.querySelector('.phone-number').addEventListener('input', (e) => {
        //     e.target.value = e.target.value.replace(/\D/g, '');
        // });














        /* in Mobile View Architecture trigger modal */

 
        document.addEventListener('DOMContentLoaded', () => {
            // --- Modal Controls ---
            const overlay = document.querySelector('.architect-popupoverlay');
            const closeBtn = document.querySelector('.closeArchitectButton');
            const openBtn = document.querySelectorAll('.openModalBtn');

            openBtn.forEach(element=>{
                element.addEventListener("click",()=>{
                    overlay.classList.add("active");
                })
            })

            closeBtn.addEventListener('click', () => {
                overlay.classList.remove('active');
            });

            overlay.addEventListener('click', (e) => {
                // Closes the modal if you click on the dark background
                if (e.target === overlay) {
                    overlay.classList.remove('active');
                }
            });

            // --- Carousel Logic ---
            const carouselInner = document.querySelector('.carousel-inner');
            const architechslides = document.querySelectorAll('.carousel-slide');
            const architechnextBtns = document.querySelectorAll('.next-arrow');
            const architechprevBtns = document.querySelectorAll('.prev-arrow');
            const totalarchitechslides = architechslides.length;
            let currentIndex = 0;
            let architectTimer = setInterval(beginArchitect, 5000);

            function updateArchitechCarousel() {
                carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            function beginArchitect() {
                currentIndex = (currentIndex + 1 ) % totalarchitechslides;
                updateArchitechCarousel();
            }
            function resetArchitectTimer() {
                clearInterval(architectTimer);
                architectTimer = setInterval(beginArchitect, 5000);
            }

            architechnextBtns.forEach(button => {
                button.addEventListener('click', () => {
                    resetArchitectTimer();
                    currentIndex = (currentIndex + 1) % totalarchitechslides;
                    updateArchitechCarousel();
                });
            });

            architechprevBtns.forEach(button => {
                button.addEventListener('click', () => {
                    resetArchitectTimer();
                    currentIndex = (currentIndex - 1 + totalarchitechslides) % totalarchitechslides;
                    updateArchitechCarousel();
                });
            });

            // Initialize carousel position
            updateArchitechCarousel();
        });





        /* Floor Popup Container */
        // const modal = document.querySelector('.modalFloor-Container');
        // document.querySelectorAll(".floorpopupTrigger").forEach(element => {
        //     element.addEventListener("click",(e)=>{
        //         e.preventDefault();
        //         modal.style.display = "block";
        //         console.log("hello");
        //     })
        // });

        // function closeFloorModal() {
            
        //     modal.style.animation = 'slideDown 0.4s ease-in forwards';
        //     setTimeout(() => {
        //         modal.style.display = 'none'; // Example: hides the modal
        //         console.log('Modal closed');
        //         modal.style.animation = 'modalSlideIn 0.5s ease-out';
        //     }, 400);
        // }

        // function askForPrice() {
        //     alert('Contact form would open here to request price details.');
        //     console.log('Price inquiry requested');
        // }

        // const style = document.createElement('style');
        // style.textContent = `
        //     @keyframes slideDown {
        //         from { opacity: 1; transform: translateY(0); }
        //         to { opacity: 0; transform: translateY(50px); }
        //     }
        // `;
        // document.head.appendChild(style);

        // document.addEventListener('DOMContentLoaded', () => {
        //     document.querySelectorAll('.feature-item').forEach((item, index) => {
        //         setTimeout(() => {
        //             item.classList.add('visible');
        //         }, index * 100);
        //     });
        // });

        // if (window.matchMedia('(min-width: 993px)').matches) {
        //     document.addEventListener('mousemove', (e) => {
        //         const decorations = document.querySelectorAll('.bg-decoration');
        //         const x = e.clientX / window.innerWidth;
        //         const y = e.clientY / window.innerHeight;
                
        //         decorations.forEach((decoration, index) => {
        //             const speed = (index + 1) * 0.5;
        //             const xMove = (x - 0.5) * speed * 20;
        //             const yMove = (y - 0.5) * speed * 20;
        //             decoration.style.transform = `translate(${xMove}px, ${yMove}px)`;
        //         });
        //     });
        // }

        document.addEventListener('DOMContentLoaded', () => {
    // Select the modal once
    const modal = document.querySelector('.modalFloor-Container');

    // Check if the modal actually exists before proceeding
    if (modal) {
        // Find all trigger elements
        document.querySelectorAll(".floorpopupTrigger").forEach(element => {
            element.addEventListener("click", (e) => {
                e.preventDefault(); // Prevents default link behavior
                modal.style.display = "block";
                console.log("Modal triggered by:", element);
            });
        });

        // Add staggered animation for feature items
        document.querySelectorAll('.feature-item').forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        });
    } else {
        console.error("Error: Modal container '.modalFloor-Container' not found.");
    }

    // Parallax effect for desktop
    if (window.matchMedia('(min-width: 993px)').matches) {
        document.addEventListener('mousemove', (e) => {
            const decorations = document.querySelectorAll('.bg-decoration');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            decorations.forEach((decoration, index) => {
                const speed = (index + 1) * 0.5;
                const xMove = (x - 0.5) * speed * 20;
                const yMove = (y - 0.5) * speed * 20;
                decoration.style.transform = `translate(${xMove}px, ${yMove}px)`;
            });
        });
    }
});

// --- Your existing functions can stay outside ---

function closeFloorModal() {
    const modal = document.querySelector('.modalFloor-Container');
    if (modal) {
        modal.style.animation = 'slideDown 0.4s ease-in forwards';
        setTimeout(() => {
            modal.style.display = 'none';
            // Reset the animation so it can play again next time
            modal.style.animation = 'modalFloorSlideIn 0.5s ease-out forwards';
        }, 400);
    }
}


// Dynamically add the keyframe animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { opacity: 1; transform: translate(-50%,-50%); }
        to { opacity: 0; transform: translate(-50%,0%); }
    }
`;
document.head.appendChild(style);




// Navbar JS

        document.addEventListener('DOMContentLoaded', () => {
            const burgerMenu = document.querySelectorAll('.burger-menu');
            const navModal = document.querySelectorAll('#navModal');
            const changeMenuIcon = document.querySelectorAll(".changeMenuIcon");
            const toggleMenu = (index) => {
                navModal[index].classList.toggle('active');
                if  (navModal[index].classList.contains("active")) {
                    changeMenuIcon[index].src = "/assets/images/icons/cabbutton.png";
                }
                else {
                    changeMenuIcon[index].src = "https://c.animaapp.com/VUWnemA4/img/cab-button.svg";
                }
            };

            burgerMenu.forEach((element,index)=>{
                element.addEventListener('click', ()=>{
                    console.log("click");
                    toggleMenu(index);
                });
            });

            navModal.forEach((element,index)=>{
                element.addEventListener('click', (event) => {
                    console.log(event.target.getAttribute("href").substring(1));
                    const targetid = event.target.getAttribute("href").substring(1);
                    const target = document.querySelectorAll(`#${targetid}`)[index];
                    target.scrollIntoView({
                        behavior: 'smooth',
                    })
                // if (event.target === navModal) {
                //     toggleMenu();
                // }
                toggleMenu(index);
            });
            })
            // navModal.addEventListener('click', (event) => {
            //     if (event.target === navModal) {
            //         toggleMenu();
            //     }
            // });
        });



        /////
        //Second floor Trigger


        // Modal functionality

        document.addEventListener('DOMContentLoaded', () => {
            const modalFloorSecondpopupOverlay = document.getElementById('modalFloorSecondpopupOverlay');
        const modalfloorsecond = document.getElementById('modalfloorsecond');
        const closebtn2 = document.getElementById('closebtn2');
        
        document.querySelectorAll(".secondFloorTrigger").forEach(element=>{
            element.addEventListener("click",(e)=>{
                e.preventDefault();
                console.log("click",e.target)
                if (modalFloorSecondpopupOverlay){
                    console.log(("hello"));
                }
                modalFloorSecondpopupOverlay.style.display = "flex";
            })
        })

        // Close modal function
        function closeSecondFloorPopup() {
            modalfloorsecond.style.animation = 'modalSlideOut 0.3s ease-in forwards';
            setTimeout(() => {
                modalFloorSecondpopupOverlay.style.display = 'none';
                modalfloorsecond.style.animation = 'modalsecondSlideIn 0.5s ease-out'; // Reset for next open
            }, 300);
        }
        
        


        // Close button event
        closebtn2.addEventListener('click', closeSecondFloorPopup);

        // Close on overlay click
        modalFloorSecondpopupOverlay.addEventListener('click', (e) => {
            if (e.target === modalFloorSecondpopupOverlay) {
                closeSecondFloorPopup();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeSecondFloorPopup();
            }
        });

        // Form submission
        
        // Phone number validation to allow only numbers
        document.querySelector('.phone-number').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });


});

        

        //click on arrow down button
        document.querySelector(".bannerscroll").addEventListener("click",(e)=>{
            e.preventDefault();
            const target = document.querySelector("#belowbannerContainer");
            target.scrollIntoView({
                behavior: 'smooth',
            })
        })


        document.querySelectorAll(".scrolluptrigger").forEach(element=>{
            element.addEventListener("click",(e)=>{
                e.preventDefault();
                const target = element.getAttribute("data-target");
                document.querySelector(`#${target}`).scrollIntoView({
                    behavior: 'smooth',
                })
            })
        })

