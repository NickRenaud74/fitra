window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM CONTENT IS LOADED')

    let productSelect = document.getElementById('productSelect')
    let productImages = document.querySelectorAll('.single-product-image')

    productSelect.addEventListener('change', (e) => {
        let target = e.target.value;
        let productImage = document.querySelector(`.single-product-image[data-variant="${target}"]`)
        
        productImages.forEach(image => image.style.display = 'none')
        productImage.style.display = 'block';
    })
})

