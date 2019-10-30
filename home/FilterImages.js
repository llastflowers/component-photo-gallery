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
                <option selected disbled>Filter Creatures</option>
                <option value="">All</option>
                <option value="Addax">Addax</option>
                <option value="Chameleon">Chameleon</option>
                <option value="Dragon">Dragon</option>
                <option value="Lizard">Lizard</option>
                <option value="Markhor">Markhor</option>
                <option value="Mouflon">Mouflon</option>
                <option value="Narwhal">Narwhal</option>
                <option value="Rhino">Rhino</option>
                <option value="Triceratops">Triceratops</option>
                <option value="Unicorn">Unicorn</option>
                <option value="Unilego">Unilego</option>
            </select>
        `;
    }
}

export default FilterImages;