import Component from '../Component.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import FilterImages from './FilterImages.js';
import images from '../data/images.js';

class App extends Component {

    onRender(dom) {
        const header = new Header({
        });
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);

        const filterImages = new FilterImages({
            images: images,
            onFilter: (imageKeyword) => {
                let filteredImages;
                if (!imageKeyword) {
                    filteredImages = images;
                }
                else {
                    filteredImages = images.filter(image => {
                        return image.keyword === imageKeyword;
                    });
                }

                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            }
        });

        const filterImagesDOM = filterImages.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterImagesDOM);
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header -->

                <main>
                    <section class="options-section">
                        <!-- FilterImages -->
                    </section>

                    <section class="list-section">
                        <!-- ImageList -->
                    </section>
                </main>
            </div>
        `;              
    }
}

export default App;