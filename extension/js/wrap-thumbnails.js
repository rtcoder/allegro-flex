async function wrapThumbnails() {
    const settings = await getStorageValues(['wrapThumbnails']);

    if (!settings.wrapThumbnails) {
        return;
    }

    const productContainer = document.querySelector('[data-box-name="Product container"]');
    const galleryContainer = productContainer.querySelector('[data-box-name="gallery container"]');
    const gallery = galleryContainer.querySelector('[data-box-name="showoffer.gallery"]')
        .querySelector('div');
    const thumbnailsContainer = gallery.querySelector('div').children.item(2)
    const thumbnailsWrapper=thumbnailsContainer.querySelector('div')
        .querySelector('div')
        .querySelector('div')
        .querySelector('div');

    thumbnailsWrapper.style.flexWrap = 'wrap';
    thumbnailsWrapper.style.gap = '5px';
    thumbnailsWrapper.style.justifyContent = 'space-around';
    thumbnailsWrapper.style.cursor = 'default';

    thumbnailsContainer.style.height = 'fit-content';
    thumbnailsContainer.style.marginTop = '20px';
    gallery.style.height = 'fit-content';

    console.log(thumbnailsWrapper);
}
