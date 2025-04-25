// DOM Elements
const screens = document.querySelectorAll('.screen');
const startBtn = document.getElementById('start-btn');
const progressBar = document.getElementById('progress');

// Question screens
const genderScreen = document.getElementById('gender-screen');
const genderNext = document.getElementById('gender-next');
const genderOptions = document.querySelectorAll('#gender-screen .option');

const skinToneScreen = document.getElementById('skin-tone-screen');
const skinToneNext = document.getElementById('skin-tone-next');
const skinToneBack = document.getElementById('skin-tone-back');
const skinToneOptions = document.querySelectorAll('#skin-tone-screen .option');

const bodyTypeScreen = document.getElementById('body-type-screen');
const bodyTypeNext = document.getElementById('body-type-next');
const bodyTypeBack = document.getElementById('body-type-back');
const bodyTypeOptions = document.getElementById('body-type-options');

const outfitTypeScreen = document.getElementById('outfit-type-screen');
const outfitTypeNext = document.getElementById('outfit-type-next');
const outfitTypeBack = document.getElementById('outfit-type-back');
const outfitTypeOptions = document.querySelectorAll('#outfit-type-screen .option');

const resultScreen = document.getElementById('result-screen');
const resultImage = document.getElementById('result-image');
const restartBtn = document.getElementById('restart-btn');

// User data
const userData = {
    gender: null,
    skinTone: null,
    bodyType: null,
    outfitType: null
};

// Body type options based on gender
const bodyTypes = {
    male: [
        { 
            value: 'pear', 
            label: 'Pear (Bahu sempit, pinggang lebar)',
            image: 'https://images.unsplash.com/photo-1745289876682-73ac45d7155b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D'
        },
        { 
            value: 'inverted_triangle', 
            label: 'Inverted Triangle (Bahu lebar, pinggang sempit)',
            image: 'https://images.unsplash.com/photo-1745289876407-b1f86cc7ba0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8fA%3D%3D'
        },
        { 
            value: 'rectangle', 
            label: 'Rectangle (Proporsi seimbang)',
            image: 'https://images.unsplash.com/photo-1745289876703-934872e0758d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D'
        }
    ],
    female: [
        { 
            value: 'pear', 
            label: 'Pear (Bahu sempit, pinggul lebar)',
            image: 'https://images.unsplash.com/photo-1745289876449-642e0ac87e6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D'
        },
        { 
            value: 'apple', 
            label: 'Apple (Lebih lebar di bagian tengah)',
            image: 'https://images.unsplash.com/photo-1745289876606-24b468925d0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D'
        },
        { 
            value: 'inverted_triangle', 
            label: 'Inverted Triangle (Bahu lebar, pinggul sempit)',
            image: 'https://images.unsplash.com/photo-1745289876413-34e0b632314f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D'
        },
        { 
            value: 'rectangle', 
            label: 'Rectangle (Proporsi seimbang)',
            image: 'https://images.unsplash.com/photo-1745289877519-a1cbedc844ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D'
        },
        { 
            value: 'hourglass', 
            label: 'Hourglass (Bahu dan pinggul seimbang, pinggang kecil)',
            image: 'https://images.unsplash.com/photo-1745289877544-3d80a97024e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D'
        }
    ]
};

// Sample outfit images (in a real app, you'd have more comprehensive logic)
const outfitImages = {
    male: {
        light: {
            pear: {
                casual: './images/8.jpg',
                formal: './images/1.jpg'
            },
            inverted_triangle: {
                casual: './images/2.jpg',
                formal: './images/43.jpg'
            },
            rectangle: {
                casual: './images/5.jpg',
                formal: './images/7.jpg'
            }
        },
        medium: {
            pear: {
                casual: './images/22.jpg',
                formal: './images/29.jpg'
            },
            inverted_triangle: {
                casual: './images/14.jpg',
                formal: './images/25.jpg'
            },
            rectangle: {
                casual: './images/24.jpg',
                formal: './images/20.jpg'
            }
        },
        dark: {
            pear: {
                casual: './images/26.jpg',
                formal: './images/27.jpg'
            },
            inverted_triangle: {
                casual: './images/27.jpg',
                formal: './images/6.jpg'
            },
            rectangle: {
                casual: './images/21.jpg',
                formal: './images/44.jpg'
            }
        }
    },
    female: {
        light: {
            pear: {
                casual: './images/46.jpg',
                formal: './images/42.jpg'
            },
            apple: {
                casual: './images/45.jpg',
                formal: './images/47.jpg'
            },
            inverted_triangle: {
                casual: './images/35.jpg',
                formal: './images/37.jpg'
            },
            rectangle: {
                casual: './images/48.jpg',
                formal: './images/41.jpg'
            },
            hourglass: {
                casual: './images/3.jpg',
                formal: './images/4.jpg'
            }
        },
        medium: {
            pear: {
                casual: './images/15.jpg',
                formal: './images/17.jpg'
            },
            apple: {
                casual: './images/9.jpg',
                formal: './images/10.jpg'
            },
            inverted_triangle: {
                casual: './images/11.jpg',
                formal: './images/16.jpg'
            },
            rectangle: {
                casual: './images/13.jpg',
                formal: './images/12.jpg'
            },
            hourglass: {
                casual: './images/19.jpg',
                formal: './images/18.jpg'
            }
        },
        dark: {
            pear: {
                casual: './images/33.jpg',
                formal: './images/32.jpg'
            },
            apple: {
                casual: './images/40.jpg',
                formal: './images/28.jpg'
            },
            inverted_triangle: {
                casual: './images/34.jpg',
                formal: './images/36.jpg'
            },
            rectangle: {
                casual: './images/38.jpg',
                formal: './images/39.jpg'
            },
            hourglass: {
                casual: './images/30.jpg',
                formal: './images/31.jpg'
            }
        }
    }
};

// Event Listeners
startBtn.addEventListener('click', () => {
    showScreen(genderScreen);
    updateProgress(20);
});

// Gender selection
genderOptions.forEach(option => {
    option.addEventListener('click', () => {
        genderOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        userData.gender = option.dataset.value;
        genderNext.disabled = false;
    });
});

genderNext.addEventListener('click', () => {
    showScreen(skinToneScreen);
    updateProgress(40);
});

// Skin tone selection
skinToneOptions.forEach(option => {
    option.addEventListener('click', () => {
        skinToneOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        userData.skinTone = option.dataset.value;
        skinToneNext.disabled = false;
    });
});

skinToneNext.addEventListener('click', () => {
    // Populate body type options based on gender
    bodyTypeOptions.innerHTML = '';
    const types = bodyTypes[userData.gender];
    
    // Di dalam event listener skinToneNext
types.forEach(type => {
    const option = document.createElement('div');
    option.className = 'option';
    option.dataset.value = type.value;
    
    // Tambahkan elemen gambar
    const img = document.createElement('img');
    img.className = 'option-image';
    img.src = type.image;
    img.alt = type.label;
    
    // Tambahkan elemen teks
    const label = document.createElement('span');
    label.textContent = type.label;
    
    option.appendChild(img);
    option.appendChild(label);
    
    bodyTypeOptions.appendChild(option);
    
    option.addEventListener('click', () => {
        document.querySelectorAll('#body-type-options .option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        userData.bodyType = option.dataset.value;
        bodyTypeNext.disabled = false;
    });
});
    showScreen(bodyTypeScreen);
    updateProgress(60);
});

skinToneBack.addEventListener('click', () => {
    showScreen(genderScreen);
    updateProgress(20);
});

// Body type selection
bodyTypeNext.addEventListener('click', () => {
    showScreen(outfitTypeScreen);
    updateProgress(80);
});

bodyTypeBack.addEventListener('click', () => {
    showScreen(skinToneScreen);
    updateProgress(40);
});

// Outfit type selection
outfitTypeOptions.forEach(option => {
    option.addEventListener('click', () => {
        outfitTypeOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        userData.outfitType = option.dataset.value;
        outfitTypeNext.disabled = false;
    });
});

outfitTypeNext.addEventListener('click', () => {
    // Generate outfit recommendation based on user data
    const imageUrl = outfitImages[userData.gender][userData.skinTone][userData.bodyType][userData.outfitType];
    resultImage.src = imageUrl;
    resultImage.alt = `Rekomendasi outfit untuk ${userData.gender === 'male' ? 'pria' : 'wanita'} dengan kulit ${userData.skinTone} dan bentuk tubuh ${userData.bodyType}`;
    
    showScreen(resultScreen);
    updateProgress(100);
});

outfitTypeBack.addEventListener('click', () => {
    showScreen(bodyTypeScreen);
    updateProgress(60);
});

// Restart button
restartBtn.addEventListener('click', () => {
    // Reset user data
    userData.gender = null;
    userData.skinTone = null;
    userData.bodyType = null;
    userData.outfitType = null;
    
    // Reset selections
    document.querySelectorAll('.option.selected').forEach(opt => opt.classList.remove('selected'));
    genderNext.disabled = true;
    skinToneNext.disabled = true;
    bodyTypeNext.disabled = true;
    outfitTypeNext.disabled = true;
    
    showScreen(document.getElementById('welcome-screen'));
    updateProgress(0);
});

// Helper functions
function showScreen(screen) {
    screens.forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function updateProgress(percent) {
    progressBar.style.width = `${percent}%`;
}