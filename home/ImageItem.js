import Component from '../Component.js';

class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/`
            <li class="image-item">
                <div class="image-container">
                <img src="${image.url}" title="${image.description}">
                </div>
                <div class="info-container">
                    <h2>${image.title}</h2>
                </div>
                <p class="horns">Horns: ${image.horns}</p>
            </li>
        `;
    }
}

export default ImageItem;