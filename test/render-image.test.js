// IMPORT MODULES under test here:
// import example from '../src/example.js';
import ImageItem from '../home/ImageItem.js';
const test = QUnit.test;

QUnit.module('Render Image Item');

test('renders html from data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const image = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        horns: 1,
        keyword: 'narwhal',
        description: 'A unicorn and a narwhal nuzzling their horns'
    };
    
    const expected = /*html*/`
        <li class="image-item">
                <div class="image-container">
                <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" title="${image.description}">
                </div>
                <div class="info-container">
                    <h2>UniWhal</h2>
                </div>
                <p class="horns">Horns: 1</p>
        </li>
        `;
    //Act 
    // Call the function you're testing and set the result to a const
    const props = { image: image };
    const imageItem = new ImageItem(props);
    const html = imageItem.renderHTML();
    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(html, expected);
});