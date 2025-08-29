


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 }
    }
  });

//   testimonial

  const testimonials = [
            {
                text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
                author: "Rumi",
                 role: "Jewellery Designer"
            },
            {
                text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
                author: "Soham",
                 role: "Marketing Manager"
            },
            {
                text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
                author: "Rachita Ghosh",
                role: "Senior Manager"
            },
            {
                text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
                author: "Debolina",
                 role: "Team Leader"
            },
            {
                text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
                author: "Jayanta",
                role: "Senior Designer"
            }
        ];


        let currentTestimonial = 1;

        function updateTestimonial(index) {
            const testimonial = testimonials[index];
            document.getElementById('testimonial-text').textContent = testimonial.text;
            document.getElementById('testimonial-author').textContent = testimonial.author;
            document.getElementById('testimonial-role').textContent = testimonial.role;

            // Update active profile image
            document.querySelectorAll('.profile-image').forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });

            currentTestimonial = index;
        }

        function nextTestimonial() {
            const nextIndex = (currentTestimonial + 1) % testimonials.length;
            updateTestimonial(nextIndex);
        }

        function previousTestimonial() {
            const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonial(prevIndex);
        }

        // Add click event listeners to profile images
        document.querySelectorAll('.profile-image').forEach((img, index) => {
            img.addEventListener('click', () => {
                updateTestimonial(index);
            });
        });

        // Auto-rotate testimonials every 5 seconds
        setInterval(nextTestimonial, 5000);