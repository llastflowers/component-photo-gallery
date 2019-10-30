import Component from '../Component.js';

class FilterImages extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        return /*html*/`
            <select class="keyword-filter">
                <option selected disabled>Filter Creatures</option>
                <option value="">All</option>
                <option value="addax">Addax</option>
                <option value="chameleon">Chameleon</option>
                <option value="dragon">Dragon</option>
                <option value="lizard">Lizard</option>
                <option value="markhor">Markhor</option>
                <option value="mouflon">Mouflon</option>
                <option value="narwhal">Narwhal</option>
                <option value="rhino">Rhino</option>
                <option value="triceratops">Triceratops</option>
                <option value="unicorn">Unicorn</option>
                <option value="unilego">Unilego</option>
            </select>
        `;
    }
}

export default FilterImages;