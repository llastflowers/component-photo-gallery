import Component from '../Component.js';

class ImageItem extends Component {
    rentderHTML() {
        const image = this.props.image;

        return /*html*/`
            <li class="image-item">
                <div class="info-container">
                    <h2>${image.name}</h2>
                    <p class="image-type">${image.type}</p>
                </div>

                <div class="image-container">
                    <img src="${image.url}" alt="${image.name} image">
                </div>
                <p class="horns">${image.horns}</p>
            </li>
        `;
    }
}

export default ImageItem;